import Link from 'next/link';
import { Card, CardBody } from '@windmill/react-ui';

import Header from '../components/Header';

import { getAllPosts } from '../server/ghost';

const Blog = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
        {posts.map(({ id, title, excerpt, feature_image, slug }) => (
          <div key={id} className="flex justify-items-center items-center m-8">
            <Card className="flex h-48">
              <Link href={`/blog/${slug}`}>
                <img
                  className="object-cover w-1/3 cursor-pointer"
                  src={feature_image}
                />
              </Link>
              <CardBody>
                <Link href={`/blog/${slug}`}>
                  <h2 className="mb-4 font-semibold cursor-pointer">{title}</h2>
                </Link>
                <p className>{excerpt}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
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
