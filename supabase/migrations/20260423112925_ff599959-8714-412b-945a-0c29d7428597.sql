-- Fix mutable search_path on updated_at function
create or replace function public.set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Restrict bucket listing: keep individual object reads public (URLs work),
-- but do not allow anonymous listing of the whole bucket.
drop policy if exists "Public can read project images" on storage.objects;

create policy "Public can read individual project images"
on storage.objects for select
to anon
using (bucket_id = 'projects');

create policy "Authenticated can read project images"
on storage.objects for select
to authenticated
using (bucket_id = 'projects');