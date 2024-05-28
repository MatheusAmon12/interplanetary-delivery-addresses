import { z } from "zod";

export const formSchema = z.object({
    type: z.string()
        .max(15, "O tipo deve ter no maximo 15 caracteres")
        .min(3, "O tipo deve ter no minimo 3 caracteres"),
    address: z.string()
        .min(4, "O endereço do lote deve ter no minimo 4 caracteres"),
    receiver: z.string()
        .max(20, "O nome do recebedor deve ter no maximo 20 caracteres")
        .min(3, "O nome do recebedor deve ter no minimo 3 caracteres")
})