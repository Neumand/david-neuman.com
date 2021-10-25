import Header from 'components/Header';
import Subscribe from 'components/Newsletter/Subscribe';
import Layout from 'layouts/Layout';
import { getAllIssues } from 'lib/revue';
import Issues from 'components/Newsletter/Issues';

export default function Newsletter({ issues }) {
  return (
    <Layout>
      <Header>
        <h1>Newsletter</h1>
      </Header>
      <div className="p-5 flex flex-col max-w-4xl m-auto mt-8 space-y-8">
        <Issues issues={issues} />
        <Subscribe />
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
