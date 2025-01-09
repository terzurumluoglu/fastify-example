import { type FastifyInstance } from "fastify";

import { userController, userSchemaV1 } from "@modules/user/v1";
import { postController } from "@modules/post/v1";

const userRouter = async (app: FastifyInstance) => {
  const { getAllUsers, getUserByUserId } = userController;
  const { getPostsByUserId } = postController;

  app.get("/", userSchemaV1.getAllUsers, getAllUsers);
  app.get("/:id", userSchemaV1.getUserByUserId, getUserByUserId);
  app.get("/:id/posts", userSchemaV1.getPostsByUserId, getPostsByUserId);
};

export default userRouter;
