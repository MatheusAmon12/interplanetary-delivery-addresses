import { formSchema } from "@/utils/formSchema";
import { z } from "zod";

export type FormDataSchema = z.infer<typeof formSchema>