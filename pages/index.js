import Link from 'next/link';
import { getAllPosts } from '../server/ghost';
import Header from '../components/Header';

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      {posts.map((post) => (
        <div key={post.id} className="flex justify-center items-center">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h1>{post.title}</h1>
            </a>
          </Link>
        </div>
      ))}
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
