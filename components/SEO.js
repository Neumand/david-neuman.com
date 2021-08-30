import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export const SEO = ({ post }) => {
  const router = useRouter();
  console.log(router);
  const { og_description, og_image } = post;

  const type = post ? 'Article' : 'Website';
  const title = post.og_title || post.meta_title;
  const description = post.og_description || post.meta_description;

  return (
    <Head>
      <title>{`${title} | David Neuman`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={post.og_title || title} />
      <meta property="og:description" content={post.og_description || description} />
      <meta property="og:site_name" content="David Neuman" />
      <meta property="og:url" content="David Neuman" />
      <meta property="twitter:title" content={post.twitter_title || title} />
      <meta
        property="twitter:description"
        content={post.twitter_description || description}
      />
    </Head>
  );
};
