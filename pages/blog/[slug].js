import { Heading } from "@chakra-ui/react";
import { getAllPosts, getPost } from "../../server/ghost";

const PostPage = ({ post }) => {
  return (
    <div>
      <Heading>{post.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  // Get the paths we want to create based on posts.
  const paths = posts.map(post => ({
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
