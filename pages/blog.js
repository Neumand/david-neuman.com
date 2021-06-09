import Header from '../components/Header';
import Posts from '../components/Posts';

import { getAllPosts } from '../server/ghost';

const Blog = ({ posts }) => {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
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
