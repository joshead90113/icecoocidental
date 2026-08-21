import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseForUser } from "../supabase";

export default defineTool({
  name: "list_raffles",
  title: "Listar rifas",
  description:
    "Lista as rifas solidárias do instituto (prêmio, valor do bilhete, data do sorteio e status). Não retorna dados de pagamento.",
  inputSchema: {
    status: z.string().optional().describe("Filtra por status, ex.: 'active'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ status }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const supabase = supabaseForUser(ctx);
    let query = supabase
      .from("raffles")
      .select("id, title, description, prize, ticket_price, draw_date, status, image_url, beneficiary_info")
      .order("draw_date", { ascending: true });
    if (status) query = query.eq("status", status);

    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data ?? []) }],
      structuredContent: { raffles: data ?? [] },
    };
  },
});
