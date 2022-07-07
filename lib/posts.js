import matter from 'gray-matter';
import fs from 'fs';
import { buildMarkdownPost } from 'util/buildMarkdownPost';

export const getAllPosts = () => {
  const files = fs.readdirSync('public/content/posts');
  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(
      `public/content/posts/${fileName}`,
      'utf-8'
    );
    const { data: frontmatter, content } = matter(readFile);
    return buildMarkdownPost(frontmatter, content);
  });

  return posts;
};

export const getPost = (slug) => {
  const fileName = fs.readFileSync(`public/content/posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  // TODO: Interface needs to be as similar to Ghost's as possible.
  return buildMarkdownPost(frontmatter, content);
};
