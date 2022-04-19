import Header from 'components/Header';
import Layout from 'layouts/Layout';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';

export default function Now() {
  return (
    <Layout>
      <NextSeo
        title={`What I'm Doing Now - ${SEO.title}`}
        description="What I'm doing now"
      />
      <Header>
        <h1>What I'm Doing Now</h1>
      </Header>
    </Layout>
  );
}
