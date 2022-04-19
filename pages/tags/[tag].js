import Header from 'components/Header';
import Posts from 'components/Posts';
import Layout from 'layouts/Layout';
import { getAllTags, getPostsForTag, getTag } from 'lib/ghost';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';

export default function Tag({ tag, posts }) {
  return (
    <Layout>
      <NextSeo title={`${tag.name} - ${SEO.title}`} />
      <Header>
        <h1 className="text-3xl font-semibold text-center md:text-5xl">
          {tag.name}
        </h1>
        <p>{tag.description}</p>
      </Header>
      <Posts posts={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths = tags.map((tag) => ({
    params: { tag: tag.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const tag = await getTag(context.params.tag);
  const postsForTag = await getPostsForTag(tag.slug);

  if (!tag) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tag, posts: postsForTag },
    revalidate: 1,
  };
}
