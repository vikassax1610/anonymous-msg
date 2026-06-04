import { z } from "zod"

export const messagesSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be atleast 10 character" })
    .max(300, { message: "content should be no longer then 300 characters" })
})