import { type FastifyInstance } from "fastify";
import { postController, userController } from "@controllers";

const userRouter = async (app: FastifyInstance) => {
  const { getAllUsers, getUserByUserId } = userController;
  const { getPostsByUserId } = postController;

  app.get(
    "/",
    {
      schema: {
        description: "Get All Users That Recorded On The Database",
        tags: ["users"],
      },
    },
    getAllUsers
  );
  app.get(
    "/:id",
    {
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
    },
    getUserByUserId
  );
  app.get(
    "/:id/posts",
    {
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
    },
    getPostsByUserId
  );
};

export default userRouter;
