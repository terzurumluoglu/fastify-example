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

export const schemaPostV1 = {
  getAllPosts,
  getPostByPostId,
};
