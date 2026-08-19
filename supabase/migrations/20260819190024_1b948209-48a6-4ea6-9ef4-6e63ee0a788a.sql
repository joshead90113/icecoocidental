-- 1. RAFFLES: hide pix_key / beneficiary_info from anonymous visitors (column-level grants)
REVOKE SELECT ON public.raffles FROM anon;
GRANT SELECT (id, title, description, prize, ticket_price, draw_date, pix_qr_code_url, status, image_url, created_at) ON public.raffles TO anon;
GRANT SELECT ON public.raffles TO authenticated;
GRANT ALL ON public.raffles TO service_role;

-- 2. LEADS: only admins can read; no update/delete allowed
DROP POLICY IF EXISTS "Only authenticated users can select leads" ON public.leads;
CREATE POLICY "Admins can select leads"
ON public.leads FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 3. PROFILES: restrict reads to authenticated users
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
CREATE POLICY "Authenticated users can view profiles"
ON public.profiles FOR SELECT TO authenticated
USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

REVOKE SELECT ON public.profiles FROM anon;

-- 4. has_role: not executable by anonymous visitors
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;