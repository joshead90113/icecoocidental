import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="container relative z-20 flex h-full flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cultura e esporte transformando vidas</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            O I.C.E.C.O. promove cultura, esporte, arte e inclusão social em Cidade Ocidental e região do Entorno.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition">
              Conheça o I.C.E.C.O.
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition">
              Faça parte
            </button>
          </div>
        </div>
      </section>

      {/* 10 Anos Section */}
      <section className="py-20 container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">10 anos construindo histórias</h2>
            <p className="text-muted-foreground mb-8">
              Há uma década, o I.C.E.C.O. atua para fortalecer a cultura, o esporte e as iniciativas sociais, conectando pessoas, talentos e oportunidades em Cidade Ocidental e região.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Anos de atuação", value: "10+" },
                { label: "Cultura", value: "Ativa" },
                { label: "Esporte", value: "Ativo" },
                { label: "Ação social", value: "Constante" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted p-8 rounded-lg flex items-center justify-center">
            <div className="text-center font-bold text-muted-foreground italic">
              [Arte 10 Anos I.C.E.C.O.]
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Cultura 🎭</h3>
              <p className="mb-6">Música, Bandas, Fanfarras, Artistas e Teatro.</p>
              <button className="text-primary font-semibold hover:underline">Ver projetos culturais →</button>
            </div>
            <div className="bg-background p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Esporte 🏆</h3>
              <p className="mb-6">Vôlei, Handebol, Futsal, Futebol e Basquete.</p>
              <button className="text-secondary font-semibold hover:underline">Ver projetos esportivos →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background mt-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">I.C.E.C.O.</h4>
              <p className="text-muted-foreground text-sm">Cidade Ocidental – Goiás</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>O Instituto</li>
                <li>Diretoria</li>
                <li>Cultura</li>
                <li>Esporte</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <span>Instagram</span>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
