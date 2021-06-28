import Construction from 'components/Construction';
import Header from 'components/Header';
import Layout from 'layouts/Layout';

export default function Newsletter() {
  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold">Newsletter</h1>
      </Header>
      <Construction />
    </Layout>
  );
}
