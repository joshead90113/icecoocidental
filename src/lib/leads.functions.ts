import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export const sendLeadEmail = createServerFn({ method: "POST" })
  .inputValidator((data) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    // Para um MVP sem servidor de e-mail configurado, vamos apenas logar e retornar sucesso.
    // Em uma implementação real com Resend, SendGrid ou similar, enviaríamos o e-mail aqui.
    console.log(`[Lead Notification] Enviando inscrição de ${data.fullName} para icecoocidental@gmail.com`);
    
    // Simulação de delay de envio
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return { success: true };
  });
