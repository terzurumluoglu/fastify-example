import { getAllUsers } from "../common/user.common.schema";
const getUserByUserId = {
  schema: {
    description: "Get Only One User by Unique UserId",
    tags: ["users"],
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
const getPostsByUserId = {
  schema: {
    description: "Get All Post Writed by Current User",
    tags: ["users"],
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

export const userSchemaV2 = {
  getAllUsers,
  getUserByUserId,
  getPostsByUserId,
};
