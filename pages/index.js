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
  const lottiePlayerRef = useRef(null);

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

  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  return (
    <Layout>
      <section className="bg-gray-200 flex flex-col justify-evenly items-center mb-8 w-full md:flex-row dark:bg-cool-gray-900">
        <Header textAlign="left">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold">David Neuman</h1>
            <span
              className="text-3xl font-semibold text-blue-800"
              ref={typedEl}
            ></span>
            <p className="text-lg mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Header>
        <lottie-player
          ref={lottiePlayerRef}
          src="https://assets4.lottiefiles.com/packages/lf20_1qgHjN.json"
          background="transparent"
          speed="1"
          style={{ width: '500px', height: '500px' }}
          loop
          autoplay
        ></lottie-player>
      </section>
      <main className="m-auto max-w-7xl p-8">
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
      </main>
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
