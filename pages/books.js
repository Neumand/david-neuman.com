import fs from 'fs';
import path from 'path';
import Image from 'next/image';

import Layout from 'layouts/Layout';
import Header from 'components/Header';
import Pill from 'components/Pill/Pill';

export default function Books({ books }) {
  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold">Books</h1>
        <p>Some of my favourite books</p>
      </Header>
      <div className="container p-5 my-10 mx-auto">
        <div className="grid gap-4 mb-8 mx-auto md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex p-4 max-h-72 max-w-xl bg-gray-50 border-2 rounded-lg shadow-sm transition-all transform ease-in-out md:hover:scale-105 md:hover:shadow-xl md:active:scale-105 md:active:shadow-xl dark:bg-cool-gray-900 dark:border-cool-gray-700"
            >
              <img
                src={book.imageUrl}
                alt={`Book cover for ${book.title} by ${book.author}`}
                className="w-30 max-h-52 md:w-44 md:max-h-64 rounded-md shadow-md"
              />
              <div className="flex flex-col max-w-[150px] m-auto text-center space-y-2 md:space-y-4 md:max-w-[200px]">
                  <h3 className="text-base md:text-xl font-bold">{book.title}</h3>
                  <div className="text-sm">{book.author}</div>
                <div className="text-xs mt-auto font-semibold uppercase text-blue-900 dark:text-blue-500">{book.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = fs.readFileSync(path.join('data/books.json'));
    const books = JSON.parse(data);
    const filteredBooks = books.sort((a, b) => a.genre.localeCompare(b.genre));
    return {
      props: {
        books: filteredBooks,
      },
    };
  } catch (error) {
    console.error(`An error occured fetching books: ${error}`);
    return;
  }
}
