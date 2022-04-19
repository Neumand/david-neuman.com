import Header from 'components/Header';
import Layout from 'layouts/Layout';
import { getBooks } from 'lib/notion';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';

export default function Books({ books }) {
  return (
    <Layout>
      <NextSeo
        title={`Books - ${SEO.title}`}
        description="An ever-growing list of fiction and non-fiction classics as well as
          those I've enjoyed more recently."
      />
      <Header>
        <h1 className="text-6xl font-bold">Books</h1>
        <p>
          An ever-growing list of fiction and non-fiction classics as well as
          those I've enjoyed more recently.
        </p>
      </Header>
      <div className="container p-5 my-10 mx-auto">
        <div className="grid gap-4 mb-8 mx-auto md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {books.map(({ title, author, imageUrl, rating, summary, genre }) => (
            <div
              key={title}
              className="flex p-4 max-h-72 max-w-xl bg-gray-50 border-2 rounded-lg shadow-sm transition-all transform ease-in-out md:hover:scale-105 md:hover:shadow-xl md:active:scale-105 md:active:shadow-xl dark:bg-cool-gray-900 dark:border-cool-gray-700"
            >
              <img
                src={imageUrl}
                alt={`Book cover for ${title} by ${author}`}
                className="w-30 max-h-52 md:w-44 md:max-h-64 rounded-md shadow-md"
              />
              <div className="flex flex-col max-w-[150px] m-auto text-center space-y-2 md:max-w-[200px]">
                <h3 className="text-base md:text-xl font-bold">{title}</h3>
                <div className="text-sm">{author}</div>
                {rating && <p className="text-xs md:text-sm">{rating}</p>}
                <p className="text-left text-xs md:text-sm">{summary}</p>
                <div className="text-xs mt-auto font-semibold uppercase text-blue-900 dark:text-blue-500">
                  {genre}
                </div>
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
    const books = await getBooks();
    return {
      props: {
        books,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error(`An error occured fetching books: ${error}`);
    return {
      props: {},
    };
  }
}
