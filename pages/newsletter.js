import Header from 'components/Header';
import Issues from 'components/Newsletter/Issues';
import Subscribe from 'components/Newsletter/Subscribe';
import Layout from 'layouts/Layout';
import { getAllIssues } from 'lib/revue';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';

export default function Newsletter({ issues }) {
  return (
    <Layout>
      <NextSeo
        title={`Newsletter - ${SEO.title}`}
        description="Sign up to receive curated articles on web development, creativity, productivity and self-development."
      />
      <Header>
        <h1>Newsletter</h1>
      </Header>
      <div className="p-5 flex flex-col max-w-4xl m-auto mt-8 space-y-8">
        <Subscribe />
        <h2>Read past issues of Dave's Dives</h2>
        <Issues issues={issues} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const issues = await getAllIssues();

  if (!issues) {
    return {
      notFound: true,
    };
  }

  return {
    props: { issues },
    revalidate: 1,
  };
}
