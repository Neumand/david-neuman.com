import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { getAllPosts, getPost } from "../../server/ghost";

const PostPage = ({ post }) => {
  return (
    <Flex
      as="main"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="30px"
      margin="0 auto"
      maxWidth="720px"
      w="100%">
      <Heading>{post.title}</Heading>
      <Box display="flex" justifyContent="space-between" w="100%">
        <Flex px={8}>
          <Text mr={8} fontSize="0.9rem">
            David Neuman
          </Text>
          <Text fontSize="0.9rem">{format(parseISO(post.created_at), "MMMM do, yyyy")}</Text>
        </Flex>
        <Text fontSize="0.9rem">{`Reading time: ${post.reading_time} ${
          post.reading_time > 1 ? "minutes" : "minute"
        }`}</Text>
      </Box>
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
