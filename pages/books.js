import Layout from 'layouts/Layout';
import Header from 'components/Header';
import Construction from 'components/Construction';

export default function Books() {
  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold">Books</h1>
      </Header>
      <Construction />
    </Layout>
  );
}
