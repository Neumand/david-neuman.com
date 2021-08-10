import { useEffect } from 'react';
import Image from 'next/image';
import prism from 'prismjs';
import { format, parseISO } from 'date-fns';

import Layout from 'layouts/Layout';
import { getAllPosts, getPost } from 'server/ghost';

const PostPage = ({ post }) => {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <Layout>
      <article className="flex flex-col justify-center max-w-2xl mx-auto w-full mt-8">
        <h1 className="text-3xl font-bold mb-2 text-center md:text-5xl sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex justify-between w-full">
          <div className="flex p-4 items-center">
            <img
              className="rounded-full inline-block h-8 w-8 mr-2"
              src="https://avatars.githubusercontent.com/u/42482170?v=4"
            />
            <div className="mr-4 text-sm">{`David Neuman // ${format(
              parseISO(post.created_at),
              'MMMM do, yyyy'
            )}`}</div>
          </div>
          <div className="flex text-sm items-center">{`Reading time: ${
            post.reading_time
          } ${post.reading_time > 1 ? 'minutes' : 'minute'}`}</div>
        </div>
        <Image
          src={post.feature_image}
          alt=""
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={post.feature_image}
        />
        <main
          className="prose md:prose-lg lg:prose-xl dark:prose-dark md:dark:prose-dark lg:dark:prose-dark"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></main>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // Posts not found should return a 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;
