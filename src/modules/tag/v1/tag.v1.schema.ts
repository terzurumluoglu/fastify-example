import { getAllTags, getTagsByKeys } from "../common/tag.common.schema";

const getPostsByTags = {
  schema: {
    description: "Get Posts by Tags",
    tags: ["tags"],
    body: {
      type: "object",
      properties: {
        tags: {
          type: "string",
        },
      },
      required: ["tags"],
    },
  },
};

const getTagsBySearchText = {
  schema: {
    description: "Get Tags Array by Search Text",
    tags: ["tags"],
    querystring: {
      type: "object",
      properties: {
        text: {
          type: "string",
        },
      },
      required: ["text"],
    },
  },
};

export const schemaTagV1 = {
  getAllTags,
  getTagsByKeys,
  getTagsBySearchText,
  getPostsByTags,
};
