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
        <div className="grid gap-6 mb-8 mx-auto md:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex justify-evenly space-x-4 p-4 max-h-72 max-w-xl bg-gray-50 border-2 rounded-lg shadow-sm dark:bg-cool-gray-900 dark:border-cool-gray-700"
            >
              <img
                src={book.imageUrl}
                alt={`Book cover for ${book.title} by ${book.author}`}
                // className="object-contain w-1/2"
                className="w-1/2 max-h-64 rounded-md shadow-md"
              />
              <div className="flex flex-col text-center">
                <div className="space-y-2">
                  <h3 className="text-base md:text-xl font-bold">{book.title}</h3>
                  <div className="text-sm font-semibold">{book.author}</div>
                  <p className="text-xs">
                    Some description here about if I've read the book or not and
                    yada yada
                  </p>
                </div>
                <div className="mt-auto">{book.genre}</div>
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
