import { getBooks } from 'lib/notion';

export default async (req, res) => {
  try {
    const books = await getBooks;
    console.log(books);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};
