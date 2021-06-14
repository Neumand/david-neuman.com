import Header from '../components/Header';
import Posts from '../components/Posts';

import { getAllPosts, getAllTags } from '../server/ghost';

const Blog = ({ posts, tags }) => {
  return (
    <>
      <Header tags={tags} />
      <Posts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, tags },
  };
}

export default Blog;
