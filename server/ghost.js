import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://david-neuman.com",
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

export const getAllPosts = () => {
  try {
    return api.posts.browse({ limit: "all" });
  } catch (error) {
    console.error(`Error getting all posts: ${error}`);
    return;
  }
};

export const getPost = slug => {
  try {
    return api.posts.read({ slug });
  } catch (error) {
    console.error(`Error fetching post: ${error}`);
    return;
  }
};
