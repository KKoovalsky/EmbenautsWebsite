import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    photoZoom: z.number().optional().default(1),
    photoOffsetY: z.number().optional().default(0),
  }),
});

export const collections = {
  posts,
  team,
};
