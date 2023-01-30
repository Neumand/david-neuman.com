import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    datePublished: z.date(),
    dateUpdated: z.optional(z.date()),
    tags: z.optional(z.array(z.string())),
    excerpt: z.string(),
    featureImage: z.string(),
    draft: z.optional(z.boolean()),
  }),
});

export const collections = {
  blog: blogCollection,
};
