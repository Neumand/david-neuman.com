import Layout from 'layouts/Layout';
import Posts from '../components/Posts';

import { getAllPosts, getAllTags } from '../server/ghost';

const Blog = ({ posts }) => {
  return (
    <Layout header="Blog">
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
  };
}

export default Blog;
