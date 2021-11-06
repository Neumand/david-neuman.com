import { useEffect } from 'react';
import Image from 'next/image';
import prism from 'prismjs';

import Layout from 'layouts/Layout';
import Tags from 'components/Tags';
import Subscribe from 'components/Newsletter/Subscribe';
import { getAllPosts, getPost } from 'lib/ghost';
import { formatDate, formatReadingTime } from 'util/formatter';

const PostPage = ({ post }) => {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <Layout>
      <article className="flex flex-col justify-center max-w-2xl mx-auto w-full mt-8 px-8 md:px-0">
        <h1 className="text-3xl font-bold mb-2 text-center md:text-5xl">
          {post.title}
        </h1>
        <div className="flex justify-between w-full">
          <div className="flex p-4 items-center">
            <img
              className="rounded-full inline-block h-8 w-8 mr-2"
              src="https://avatars.githubusercontent.com/u/42482170?v=4"
            />
            <div className="mr-4 text-xs md:text-base">{`David Neuman // ${formatDate(
              post.created_at
            )}`}</div>
          </div>
          <div className="flex text-xs items-center md:text-base">
            {formatReadingTime(post.reading_time)}
          </div>
        </div>
        <Image
          src={post.feature_image}
          alt=""
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={post.feature_image}
        />
        <main className="prose md:prose-lg lg:prose-xl dark:prose-dark md:dark:prose-dark lg:dark:prose-dark">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </main>
        <div className="flex justify-center md:block mb-8">
          <Tags tags={post.tags} />
        </div>
        <Subscribe />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
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
    revalidate: 1,
  };
}

export default PostPage;
