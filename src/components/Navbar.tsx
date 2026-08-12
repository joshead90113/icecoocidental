import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Início", to: "/" },
    {
      label: "O I.C.E.C.O.",
      children: [
        { label: "Quem somos", to: "/" as any },
        { label: "Diretoria", to: "/diretoria" },
        { label: "10 Anos de História", to: "/" as any },
      ],
    },
    {
      label: "Cultura",
      to: "/" as any,
      children: [
        { label: "Música", to: "/" as any },
        { label: "Bandas e Fanfarras", to: "/" as any },
        { label: "Artistas", to: "/" as any },
        { label: "Teatro", to: "/" as any },
      ],
    },
    {
      label: "Esporte",
      to: "/" as any,
      children: [
        { label: "Vôlei", to: "/" as any },
        { label: "Handebol", to: "/" as any },
        { label: "Futsal", to: "/" as any },
        { label: "Futebol de 7", to: "/" as any },
        { label: "Futebol de Campo", to: "/" as any },
        { label: "Vôlei de Praia", to: "/" as any },
        { label: "Basquetebol", to: "/" as any },
        { label: "Filiados", to: "/" as any },
      ],
    },
    { label: "Projetos", to: "/" as any },
    { label: "Eventos", to: "/eventos" as any },
    { label: "Notícias", to: "/" as any },
    { label: "Galeria", to: "/" as any },
    { label: "Contato", to: "/" as any },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">I.C.E.C.O.</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase leading-tight">Instituto Cultural e Esportivo</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.children ? (
                <div className="flex items-center cursor-pointer py-2 text-sm font-medium transition-colors hover:text-primary">
                  {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                  <div className="absolute top-full left-0 hidden min-w-[200px] border bg-card p-2 shadow-lg group-hover:block">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to={"/" as any}
            className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Quero fazer parte
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background h-[calc(100vh-5rem)] overflow-y-auto p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6 pb-12">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 pb-4">
                {item.children ? (
                  <div className="flex flex-col space-y-3">
                    <span className="font-black text-lg text-primary uppercase tracking-tight">{item.label}</span>
                    <div className="grid grid-cols-1 gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="pl-4 text-sm font-medium hover:text-primary py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="text-lg font-black uppercase tracking-tight hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to={"/" as any}
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-4 text-lg font-black text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90"
              onClick={() => setIsOpen(false)}
            >
              Quero fazer parte
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
