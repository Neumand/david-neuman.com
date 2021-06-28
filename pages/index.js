import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

import Layout from 'layouts/Layout';
import Header from 'components/Header';
import Tags from 'components/Tags';
import { getFeaturedPosts } from 'server/ghost';

const Home = ({ featuredPosts }) => {
  const typedEl = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(typedEl.current, {
      strings: ['writes code.', 'writes music.', 'writes words on a screen.'],
      typeSpeed: 35,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.current.destroy();
  });

  return (
    <Layout>
      <Header textAlign="left">
        <h1 className="text-6xl font-bold">David Neuman</h1>
        <span className="text-3xl font-semibold text-blue-800" ref={typedEl}></span>
      </Header>
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
