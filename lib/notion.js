const { Client } = require('@notionhq/client');
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getBooks = async () => {
  const { results } = await notion.databases.query({
    auth: process.env.NOTION_TOKEN,
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const books = results.map((page) => {
    const { Title, Author, Summary, Genre, Slug } = page.properties;
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
      slug,
    };
  });

  return books;
};
