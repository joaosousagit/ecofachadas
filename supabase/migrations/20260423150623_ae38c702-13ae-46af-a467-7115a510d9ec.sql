
-- 1) Fix privilege escalation on user_roles
-- Drop the overly permissive ALL policy and replace with granular ones
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 2) Restrict listing of the public 'projects' storage bucket to admins
-- Files remain publicly readable by direct URL (bucket is public),
-- but listing the bucket contents requires admin role.
DROP POLICY IF EXISTS "Public can list projects bucket" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can list projects" ON storage.objects;

CREATE POLICY "Only admins can list projects bucket"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'projects' AND public.has_role(auth.uid(), 'admin')
);
