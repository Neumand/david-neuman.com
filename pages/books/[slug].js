import { getBooks } from 'lib/notion';

export default function Book({ book }) {
  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.genre}</div>
    </>
  );
}

export async function getStaticPaths() {
  const books = await getBooks();
  const paths = books
    .filter((book) => book.slug !== '')
    .map((book) => ({
      params: { slug: book.slug },
    }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const books = await getBooks();
  const book = books.find((book) => book.slug === context.params.slug);

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
}
