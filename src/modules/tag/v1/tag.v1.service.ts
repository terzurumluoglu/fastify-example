import { POSTS, TAGS } from "@mock";

const getPostsByTags = (tags: string) => {
  const tagKeys: string[] = tags.split(",");
  return POSTS.filter((post) =>
    post.tags.some((tag) => tagKeys.includes(tag.key))
  );
};

const getTagsBySearchText = (text: string) => {
  return TAGS.filter(
    (tag) =>
      tag.value.toLowerCase().includes(text.toLowerCase()) ||
      text.toLowerCase().includes(tag.value.toLowerCase())
  );
};

export const tagService = {
  getPostsByTags,
  getTagsBySearchText,
};
