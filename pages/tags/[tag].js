import Header from "../../components/Header";
import Posts from "../../components/Posts";
import { getAllTags, getPostsForTag, getTag } from "../../server/ghost"

export default function Tag({ tag, posts }) {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-semibold text-center">{`Tag: ${tag.name}`}</h1>
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths = tags.map((tag) => ({
    params: { tag: tag.slug },
  }));

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const tag = await getTag(context.params.tag);
  const postsForTag = await getPostsForTag(tag.slug);

  if (!tag) {
    return {
      notFound: true,
    }
  }

  return {
    props: { tag, posts: postsForTag },
  };
}