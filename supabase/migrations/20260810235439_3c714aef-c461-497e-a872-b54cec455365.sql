-- Revoke default execute on security definer function
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated, service_role;

-- Fixing RLS enabled with no policy (board_members, categories, members, projects, news)
-- These were already created in previous migration but let's ensure they are explicit if the linter missed them or if I need to re-apply

-- Categories
CREATE POLICY "Public read categories policy" ON public.categories FOR SELECT USING (true);
-- Members
CREATE POLICY "Public read members policy" ON public.members FOR SELECT USING (true);
-- Projects
CREATE POLICY "Public read projects policy" ON public.projects FOR SELECT USING (true);
-- News
CREATE POLICY "Public read news policy" ON public.news FOR SELECT USING (true);
-- Board Members
CREATE POLICY "Public read board_members policy" ON public.board_members FOR SELECT USING (true);

-- Adding policies for board_members table that might have been missing or just ensuring they exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policy WHERE polname = 'Admins can manage board members'
    ) THEN
        CREATE POLICY "Admins can manage board members" ON public.board_members
        FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
    END IF;
END
$$;
