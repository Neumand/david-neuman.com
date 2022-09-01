import { Client } from '@notionhq/client';
const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  summary: string;
  genre: string;
  rating: string;
  slug: string;
}

export const getBooks = async (): Promise<Book[]> => {
  const { results } = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
  });

  const books = results.map((page) => {
    const { Title, Author, Summary, Genre, Slug, Rating } = page.properties;
    const imageUrl = page.properties['Image Link'].url;
    const summary =
      Summary.rich_text.length > 0 ? Summary.rich_text[0].text.content : '';
    const slug =
      Slug.rich_text.length > 0 ? Slug.rich_text[0].text.content : '';

    return {
      title: Title.title[0].text.content,
      author: Author.multi_select[0]?.name,
      imageUrl,
      summary,
      genre: Genre.select?.name,
      rating: Rating?.select?.name || null,
      slug,
    } as Book;
  });

  return books;
};
