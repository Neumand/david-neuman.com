import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

import Layout from 'layouts/Layout';
import Header from 'components/Header';
import Tags from 'components/Tags';
import { getFeaturedPosts } from 'lib/ghost';

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
      <section className="p-12 bg-gray-200 flex flex-col justify-center items-center mb-8 w-full md:flex-row dark:bg-cool-gray-800">
        <Header textAlign="left">
          <div className="max-w-xl">
            <h1>David Neuman</h1>
            <span
              className="text-xl font-semibold text-blue-800 md:text-4xl"
              ref={typedEl}
            ></span>
            <p className="text-sm mt-8 md:text-lg">
              I'm a full stack developer, musician, and writer based in
              Montreal, QC. Thanks for reading!
            </p>
          </div>
        </Header>
      </section>
      <main className="flex flex-col justify-center items-center m-auto max-w-7xl p-12 md:p8">
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
    revalidate: 1,
  };
}

export default Home;
