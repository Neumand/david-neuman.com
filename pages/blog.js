import Header from 'components/Header';
import Layout from 'layouts/Layout';
import Posts from 'components/Posts';

import { getAllPosts } from 'lib/posts';
import { getAllGhostPosts } from 'lib/ghost';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Header>
        <h1>Blog</h1>
      </Header>
      <Posts posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const ghostPosts = await getAllGhostPosts();
  ghostPosts.forEach(p => console.log(p.feature_image));
  const markdownPosts = getAllPosts();
  if (!markdownPosts) {
    return {
      notFound: true,
    };
  }

  const posts = markdownPosts
    .sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished))
    .filter((post) => !post.draft);

  return {
    props: { posts },
    revalidate: 1,
  };
}

export default Blog;
