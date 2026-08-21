import { auth, defineMcp, type AnyToolDefinition } from "@lovable.dev/mcp-js";
import listBoardMembers from "./tools/list-board-members";
import listCategories from "./tools/list-categories";
import listNews from "./tools/list-news";
import listProjects from "./tools/list-projects";
import listRaffles from "./tools/list-raffles";

// O issuer OAuth precisa ser o host direto do backend (o proxy publicado é rejeitado).
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "icecoocidental",
  title: "icecoocidental",
  version: "0.1.0",
  instructions:
    "Ferramentas do portal do I.C.E.C.O. (Instituto Cultural e Esportivo de Cidade Ocidental). Consulte a diretoria, categorias de cultura e esporte, projetos, notícias e rifas solidárias.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  // Cast necessário: `outputSchema` é opcional e o projeto usa exactOptionalPropertyTypes.
  tools: [listBoardMembers, listCategories, listProjects, listNews, listRaffles] as unknown as AnyToolDefinition[],
});
