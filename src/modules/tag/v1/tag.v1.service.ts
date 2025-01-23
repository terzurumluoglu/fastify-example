import { POSTS } from "@mock";

const getPostsByTags = (tags: string) => {
  const tagKeys: string[] = tags.split(",");
  return POSTS.filter((post) =>
    post.tags.some((tag) => tagKeys.includes(tag.key))
  );
};

export const tagService = {
  getPostsByTags,
};
