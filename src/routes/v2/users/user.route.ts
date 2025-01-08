import { type FastifyInstance } from "fastify";
import { postController, userController } from "@controllers";

const userRouter = async (app: FastifyInstance) => {
  const { getAllUsers, getUserByUserId } = userController;
  const { getPostsByUserId } = postController;

  app.get(
    "/",
    {
      schema: {
        description: "users end points",
        tags: ["users"],
      },
    },
    getAllUsers
  );
  app.get(
    "/:id",
    {
      schema: {
        description: "users end points",
        tags: ["users"],
      },
    },
    getUserByUserId
  );
  app.get(
    "/:id/posts",
    {
      schema: {
        description: "users end points",
        tags: ["users"],
      },
    },
    getPostsByUserId
  );
};

export default userRouter;
