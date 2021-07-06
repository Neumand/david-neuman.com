import fs from 'fs';
import path from 'path';
import Image from 'next/image';

import Layout from 'layouts/Layout';
import Header from 'components/Header';
import Construction from 'components/Construction';

export default function Books({ books }) {
  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold">Books</h1>
      </Header>
      <div className="container p-5 my-10 mx-auto md:grid md:grid-cols-2">
        {books.map((book, idx) => (
          <div
            key={idx}
            class="p-6 mx-auto"
          >
            <div class="flex flex-col items-start justify-center py-2 rounded-lg lg:flex-row">
              <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2 lg:h-1/2">
                <img src={book.imageUrl} alt="placeholder" class="rounded-lg" />
              </div>
              <div class="flex flex-col w-full text-blueGray-500 lg:ml-4">
                <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
                  {book.title}
                </h2>
                <p class="mb-3 text-base leading-relaxed text-blueGray-500">
                  {book.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Construction /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = fs.readFileSync(path.join('data/books.json'));
    const books = JSON.parse(data);
    return {
      props: {
        books,
      },
    };
  } catch (error) {
    console.error(`An error occured fetching books: ${error}`);
    return;
  }
}
