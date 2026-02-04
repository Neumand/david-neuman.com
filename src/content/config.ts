import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    datePublished: z.date(),
    dateUpdated: z.optional(z.date()),
    tags: z.optional(z.array(z.string())),
    excerpt: z.string(),
    featureImage: z.string(),
    draft: z.optional(z.boolean()),
  }),
});

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    datePublished: z.date(),
    tags: z.optional(z.array(z.string())),
    excerpt: z.string().optional().nullable(),
    featureImage: z.string(),
    draft: z.optional(z.boolean()),
    rating: z.optional(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  books: booksCollection,
};
