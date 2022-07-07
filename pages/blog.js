import fs from 'fs';

import Header from 'components/Header';
import Layout from 'layouts/Layout';
import Posts from 'components/Posts';

import { getAllPosts } from 'lib/ghost';
import matter from 'gray-matter';
import { buildMarkdownPost } from 'util/buildMarkdownPost';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Header>
        <h1>Blog</h1>
      </Header>
      <Posts posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  // const markdownPosts = getAllPosts();
  // return markdownPosts
  //   .sort((a, b) => a.datePublished - b.datePublished)
  //   .filter((post) => !post.draft);

  const posts = await getAllPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}

export default Blog;
