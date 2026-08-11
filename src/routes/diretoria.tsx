import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/diretoria')({
  component: BoardPage,
})

function BoardPage() {
  const { data: boardMembers } = useQuery({
    queryKey: ['board-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('board_members')
        .select('*')
        .order('order_index')
      if (error) throw error
      return data
    },
  })

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container px-4 py-20">
        <header className="mb-20 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
            <div className="h-px w-8 bg-primary" />
            Estrutura Organizacional
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
            Nossa <span className="text-primary italic">Diretoria</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Conheça os líderes dedicados que guiam o I.C.E.C.O. na missão de transformar vidas através da cultura e do esporte.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {boardMembers?.map((member) => (
            <div key={member.id} className="group relative bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                {member.photo_url ? (
                  <img 
                    src={member.photo_url} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary">
                    <span className="text-6xl font-black">{member.name[0]}</span>
                  </div>
                )}
              </div>
              <div className="p-8 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-black text-primary uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
                <div className="h-px w-full bg-border" />
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {member.bio || 'Membro dedicado da diretoria do I.C.E.C.O., trabalhando para o fortalecimento da comunidade em Cidade Ocidental.'}
                </p>
                <button className="pt-2 text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Ver currículo completo <span>→</span>
                </button>
              </div>
            </div>
          ))}
          {!boardMembers && Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-3xl bg-card border border-border/50 overflow-hidden">
              <div className="aspect-[4/5] bg-muted" />
              <div className="p-8 space-y-4">
                <div className="h-6 bg-muted w-3/4" />
                <div className="h-4 bg-muted w-1/2" />
                <div className="h-20 bg-muted w-full" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer code can be extracted to a separate component later */}
    </div>
  )
}
