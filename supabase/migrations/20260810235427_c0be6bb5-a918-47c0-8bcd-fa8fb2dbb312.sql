create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Tabelas principais

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  photo_url text,
  bio text,
  updated_at timestamptz default now()
);

grant select, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
grant select on public.profiles to anon;

alter table public.profiles enable row level security;

create policy "Users can view all profiles" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Diretoria
create table public.board_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  photo_url text,
  bio text,
  order_index int default 0,
  created_at timestamptz default now()
);

grant select on public.board_members to anon, authenticated;
grant all on public.board_members to service_role;

alter table public.board_members enable row level security;
create policy "Public read board_members" on public.board_members for select using (true);

-- Categorias (Cultura/Esporte)
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  type text not null check (type in ('culture', 'sport')),
  description text,
  icon text,
  created_at timestamptz default now()
);

grant select on public.categories to anon, authenticated;
grant all on public.categories to service_role;

alter table public.categories enable row level security;
create policy "Public read categories" on public.categories for select using (true);

-- Filiados (Artistas/Atletas)
create table public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category_id uuid references public.categories(id),
  photo_url text,
  bio text,
  social_links jsonb default '{}'::jsonb,
  is_verified boolean default false,
  created_at timestamptz default now()
);

grant select on public.members to anon, authenticated;
grant all on public.members to service_role;

alter table public.members enable row level security;
create policy "Public read members" on public.members for select using (true);

-- Projetos
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category_id uuid references public.categories(id),
  status text check (status in ('active', 'completed', 'upcoming')),
  image_url text,
  created_at timestamptz default now()
);

grant select on public.projects to anon, authenticated;
grant all on public.projects to service_role;

alter table public.projects enable row level security;
create policy "Public read projects" on public.projects for select using (true);

-- Notícias
create table public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text,
  excerpt text,
  image_url text,
  published_at timestamptz default now(),
  author_id uuid references auth.users(id)
);

grant select on public.news to anon, authenticated;
grant all on public.news to service_role;

alter table public.news enable row level security;
create policy "Public read news" on public.news for select using (true);

-- Inserindo dados iniciais (Seed)
insert into public.categories (name, slug, type, description) values
('Música', 'musica', 'culture', 'Bandas, fanfarras e instrumentistas'),
('Teatro', 'teatro', 'culture', 'Grupos de teatro e artes cênicas'),
('Vôlei', 'volei', 'sport', 'Equipes e atletas de voleibol'),
('Futsal', 'futsal', 'sport', 'Equipes e atletas de futsal');

insert into public.board_members (name, role, order_index) values
('Rodrigo Lima', 'Presidente', 1),
('Lucinaldo', 'Vice Presidente', 2),
('Matheus Wellington', '1º Secretário', 3),
('Gabriel Saraiva', '2º Secretário', 4),
('Andreia Alves', '1ª Tesoureira', 5),
('Bruno Guerra', '2º Tesoureiro', 6);
