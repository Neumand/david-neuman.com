import Header from 'components/Header';
import Layout from 'layouts/Layout';

export default function Guestbook() {
  return (
    <Layout>
      <Header>
        <div className="p-5 flex flex-col items-center max-w-4xl m-auto space-y-8">
          <h1>Guestbook</h1>
          <p>
            Inspired by{' '}
            <a className="link" href="https://leerob.io/guestbook">
              Lee Rob's guestbook
            </a>{' '}
            but with a Web3 twist! Your comments will be stored on the Ethereum
            blockchain with a chance at winning ETH!
          </p>
          <p></p>
          <textarea
            rows="5"
            cols="20"
            className="textarea w-full"
            placeholder="Sign the guestbook!"
          ></textarea>
          <button className="flex items-center justify-center w-28 font-bold bg-cool-gray-800 text-white rounded-full p-2 self-center focus:outline-none dark:bg-blue-900">
            Sign
          </button>
        </div>
      </Header>
    </Layout>
  );
}
