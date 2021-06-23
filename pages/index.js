import Image from 'next/image';

import Layout from 'layouts/Layout';
import Tags from 'components/Tags';
import { getFeaturedPosts } from 'server/ghost';

const Home = ({ featuredPosts }) => {
  return (
    <Layout
      header="David Neuman"
      subHeader="Full-stack software developer, musician, and writer."
    >
      <h2 className="text-xl uppercase font-semibold">Featured Posts</h2>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <h3 className="text-3xl mb-4 font-semibold">{post.title}</h3>
          <Image
            className="rounded"
            src={post.feature_image}
            width={700}
            height={400}
          />
          <div>{post.excerpt}</div>
          <Tags tags={post.tags} />
        </div>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts();

  if (!featuredPosts) {
    return;
  }

  return {
    props: { featuredPosts },
  };
}

export default Home;
