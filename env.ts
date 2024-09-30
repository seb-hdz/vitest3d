import z from "zod";

const schema = z.object({
  VITE_SUPABASE_URL: z.string().min(1),
  VITE_SUPABASE_KEY: z.string().min(1),
});

export const ENV = schema.parse(process.env);
