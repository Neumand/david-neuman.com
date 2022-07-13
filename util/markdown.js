import { calculateReadingTime } from './formatter';
import { v4 as uuid } from 'uuid';

export const buildMarkdownPost = (frontmatter, content) => ({
  datePublished: frontmatter.date_published.toISOString(),
  draft: frontmatter.draft ?? false,
  excerpt: frontmatter.excerpt,
  featureImage: frontmatter.feature_image ?? null, // TODO: Add this to each post metadata.
  id: uuid(),
  html: content,
  readingTime: calculateReadingTime(content),
  slug: frontmatter.slug,
  tags: frontmatter.tags ?? [],
  title: frontmatter.title,
});
