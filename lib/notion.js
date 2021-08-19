const { Client } = require('@notionhq/client');
const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const getBooks = notion.databases.query({
  auth: process.env.NOTION_TOKEN,
  database_id: process.env.NOTION_DATABASE_ID
});