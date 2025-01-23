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

export const schemaTagV1 = {
  getAllTags,
  getTagsByKeys,
  getPostsByTags,
};
