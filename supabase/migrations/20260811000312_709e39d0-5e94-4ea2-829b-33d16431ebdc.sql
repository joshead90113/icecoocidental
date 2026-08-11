
-- Add additional categories for Sport and Culture
INSERT INTO public.categories (name, slug, type, description) VALUES
('Handebol', 'handebol', 'sport', 'Equipes e atletas de handebol'),
('Futebol de 7', 'futebol-7', 'sport', 'Equipes e atletas de futebol society'),
('Futebol de Campo', 'futebol-campo', 'sport', 'Equipes e atletas de futebol de campo'),
('Vôlei de Praia', 'volei-praia', 'sport', 'Atletas de vôlei de praia'),
('Basquetebol', 'basquetebol', 'sport', 'Equipes e atletas de basquete'),
('Bandas e Fanfarras', 'bandas-fanfarras', 'culture', 'Grupos musicais e de sopro'),
('Artistas', 'artistas', 'culture', 'Artistas individuais e visuais');

-- Add remaining board members from screenshot
INSERT INTO public.board_members (name, role, order_index) VALUES
('Matheus Abreu', '1º Conselho Fiscal', 7),
('Cauã Vinícius', '2º Conselho Fiscal', 8);
