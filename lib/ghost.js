import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://david-neuman-cms.herokuapp.com',
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v4',
});

export const getAllPosts = () => {
  try {
    return api.posts.browse({ limit: 'all', include: 'tags' });
  } catch (error) {
    console.error(`Error getting all posts: ${error}`);
    return;
  }
};

export const getFeaturedPosts = () => {
  try {
    return api.posts.browse({ filter: 'featured:true', include: "tags" });
  } catch (error) {
    console.error(`Error getting featured post(s): ${error}`);
  }
};

export const getPostsForTag = (tag) => {
  try {
    return api.posts.browse({
      limit: 'all',
      include: 'tags',
      filter: `tag:${tag}`,
    });
  } catch (error) {
    console.error(`Error getting posts for given tag: ${error}`);
    return;
  }
};

export const getAllTags = () => {
  try {
    return api.tags.browse({ limit: 'all' });
  } catch (error) {
    console.error(`Error getting all tags: ${error}`);
    return;
  }
};

export const getTag = (slug) => {
  try {
    return api.tags.read({ slug }, { include: 'count.posts' });
  } catch (error) {
    console.error(`Error getting tag: ${error}`);
    return;
  }
};

export const getPost = (slug) => {
  try {
    return api.posts.read({ slug }, { include: 'tags' });
  } catch (error) {
    console.error(`Error fetching post: ${error}`);
    return;
  }
};
