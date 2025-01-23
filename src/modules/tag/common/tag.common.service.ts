import { TAGS } from "@mock";

const getAllTags = async () => TAGS;

const getTagsByKeys = async (keys: string) => {
  const tagKeys = keys.toLowerCase().split(",");
  console.log("*****************************");
  console.log(tagKeys);
  console.log("*****************************");
  return TAGS.filter((tag) => tagKeys.some((key) => tag.key === key));
};

export const tagServiceCommon = {
  getAllTags,
  getTagsByKeys,
};
