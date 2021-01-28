import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { getAllPosts, getPost } from "../../server/ghost";

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" padding="30px">
      <Heading>{post.title}</Heading>
      <Text>{`Reading time: ${post.reading_time} ${
        post.reading_time > 1 ? "minutes" : "minute"
      }`}</Text>
      <Box dangerouslySetInnerHTML={{ __html: post.html }}></Box>
    </Flex>
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
