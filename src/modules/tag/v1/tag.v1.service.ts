import { POSTS } from "@mock";

const getPostsByTags = (tagKeys: string[]) => {
  return POSTS.filter((post) =>
    post.tags.some((tag) => tagKeys.includes(tag.key))
  );
};

export const tagService = {
  getPostsByTags,
};
