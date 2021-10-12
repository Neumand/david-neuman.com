import Construction from 'components/Construction';
import Header from 'components/Header';
import Subscribe from 'components/Newsletter/Subscribe';
import Layout from 'layouts/Layout';

export default function Newsletter() {
  return (
    <Layout>
      <Header>
        <h1>Newsletter</h1>
      </Header>
      <div className="p-5 flex flex-col max-w-4xl m-auto mt-8 space-y-2">
        <p className="text-center">
          Hey there! Thanks for checking out my newsletter. I'm still working on
          the first issue, but make sure to subscribe down below so you don't
          miss it!
        </p>
        <Subscribe />
      </div>
    </Layout>
  );
}
