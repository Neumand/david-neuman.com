import Header from 'components/Header';
import Posts from 'components/Posts';
import Layout from 'layouts/Layout';
import { getAllPosts } from 'lib/ghost';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <NextSeo
        title={`Blog - ${SEO.title}`}
        description="David Neuman's personal blog"
      />
      <Header>
        <h1>Blog</h1>
      </Header>
      <Posts posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
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
