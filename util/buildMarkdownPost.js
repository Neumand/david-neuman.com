import { calculateReadingTime } from './formatter';
import { v4 as uuid } from 'uuid';

export const buildMarkdownPost = (frontmatter, content) => ({
  datePublished: frontmatter.date_published, // TODO: Convert created_at to datePublished.
  draft: frontmatter.draft ?? false,
  excerpt: frontmatter.excerpt,
  featureImage: 'some-broken-image.png', // TODO: Add this to each post metadata.
  id: uuid(),
  html: content,
  readingTime: calculateReadingTime(content),
  slug: frontmatter.slug,
  tags: frontmatter.tags, // TODO: Convert all tags to array format + fix JSX component.
  title: frontmatter.title,
});
