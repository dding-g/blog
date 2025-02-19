import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().nullish(),
    date: z.coerce.date(),
    image: z.string().default("/profile.webp"),
  }),
});

export const collections = { posts };
