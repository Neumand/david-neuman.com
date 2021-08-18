import Header from 'components/Header';
import Layout from 'layouts/Layout';
import Posts from '../components/Posts';

import { getAllPosts, getAllTags } from '../server/ghost';

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
