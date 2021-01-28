import { Flex, Heading, Link } from "@chakra-ui/react";
import { getAllPosts } from "../server/ghost";

const Blog = ({ posts }) => {
  return posts.map(post => (
    <Flex justifyContent="center" alignItems="center">
      <Link href={`/blog/${post.slug}`}>
        <Heading key={post.id}>{post.title}</Heading>
      </Link>
    </Flex>
  ));
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

export default Blog;
