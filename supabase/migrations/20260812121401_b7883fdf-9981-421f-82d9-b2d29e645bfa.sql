create table public.raffles (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text,
    prize text not null,
    ticket_price numeric(10,2) not null,
    draw_date timestamptz not null,
    pix_key text,
    pix_qr_code_url text,
    beneficiary_info text,
    status text not null default 'active' check (status in ('active', 'completed', 'cancelled')),
    image_url text,
    created_at timestamptz default now()
);

grant select on public.raffles to anon, authenticated;
grant all on public.raffles to service_role;

alter table public.raffles enable row level security;

create policy "Public read raffles" on public.raffles for select using (true);

insert into public.raffles (
    title, 
    description, 
    prize, 
    ticket_price, 
    draw_date, 
    pix_key, 
    beneficiary_info
) values (
    'Rifa Solidária Musical',
    'Todo valor arrecadado será para custear os gastos das nossas bandas Jorge Amado e Pedro Mourão com as competições deste segundo semestre de 2026.',
    'Viagem para Guaibim, Bahia (Ganhador + 1 acompanhante, transporte e hospedagem inclusos)',
    10.00,
    '2026-08-12 21:30:00-03',
    '983.732.421-04',
    'Jorge Amado e Pedro Mourão'
);