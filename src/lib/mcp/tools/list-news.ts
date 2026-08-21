import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_news",
  title: "Listar notícias",
  description: "Lista as notícias publicadas pelo I.C.E.C.O., da mais recente para a mais antiga.",
  inputSchema: {
    limit: z.number().int().optional().describe("Quantidade máxima de notícias (padrão 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const take = Math.min(Math.max(limit ?? 20, 1), 100);
    const supabase = supabaseForUser(ctx);
    const { data, error } = await supabase
      .from("news")
      .select("id, title, excerpt, content, image_url, published_at")
      .order("published_at", { ascending: false })
      .limit(take);

    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { news: data ?? [] },
    };
  },
});
