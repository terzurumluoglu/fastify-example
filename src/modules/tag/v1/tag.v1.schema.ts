import { getAllTags } from "../common/tag.common.schema";

const getPostsByTags = {
  schema: {
    description: "Get Posts by Tags",
    tags: ["tags"],
    params: {
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
  getPostsByTags,
};
