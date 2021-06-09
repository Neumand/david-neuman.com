import Link from 'next/link';
import { getAllPosts } from '../server/ghost';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  );
};

export async function getStaticProps(context) {
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

export default Home;
