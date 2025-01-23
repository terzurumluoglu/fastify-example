import { getAllPosts } from "../common/post.common.schema";
const getPostByPostId = {
  schema: {
    description: "Get Only One Post by Unique PostId",
    tags: ["posts"],
    params: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
      },
      required: ["id"],
    },
  },
};

const getPostsBySearchText = {
  schema: {
    description: "Get Posts Array by Search Text",
    tags: ["posts"],
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

export const schemaPostV1 = {
  getAllPosts,
  getPostByPostId,
  getPostsBySearchText,
};
