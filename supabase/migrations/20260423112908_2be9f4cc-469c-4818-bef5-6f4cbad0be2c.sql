-- ============ ENUMS ============
create type public.app_role as enum ('admin', 'user');
create type public.project_category as enum ('etics', 'fachadas-ventiladas', 'construcao');
create type public.lead_status as enum ('novo', 'contactado', 'ganho', 'perdido');

-- ============ USER ROLES ============
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
on public.user_roles for select
to authenticated
using (auth.uid() = user_id);

create policy "Admins can view all roles"
on public.user_roles for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
on public.user_roles for all
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

-- ============ PROJECTS ============
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  location text,
  year int,
  category project_category not null,
  description text,
  cover_url text,
  gallery jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Anyone can view published projects"
on public.projects for select
to anon, authenticated
using (published = true);

create policy "Admins can view all projects"
on public.projects for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can insert projects"
on public.projects for insert
to authenticated
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update projects"
on public.projects for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete projects"
on public.projects for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- ============ LEADS ============
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text not null,
  status lead_status not null default 'novo',
  internal_notes text,
  source text default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit leads"
on public.leads for insert
to anon, authenticated
with check (
  length(name) between 1 and 200
  and length(message) between 1 and 5000
  and (email is null or length(email) <= 320)
  and (phone is null or length(phone) <= 50)
);

create policy "Admins can view leads"
on public.leads for select
to authenticated
using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update leads"
on public.leads for update
to authenticated
using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete leads"
on public.leads for delete
to authenticated
using (public.has_role(auth.uid(), 'admin'));

-- ============ updated_at triggers ============
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

-- ============ STORAGE ============
insert into storage.buckets (id, name, public)
values ('projects', 'projects', true)
on conflict (id) do nothing;

create policy "Public can read project images"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'projects');

create policy "Admins can upload project images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'projects' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update project images"
on storage.objects for update
to authenticated
using (bucket_id = 'projects' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete project images"
on storage.objects for delete
to authenticated
using (bucket_id = 'projects' and public.has_role(auth.uid(), 'admin'));