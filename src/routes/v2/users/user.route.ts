import { type FastifyInstance } from "fastify";

import { userController, userSchemaV2 } from "@modules/user/v2";

const userRouter = async (app: FastifyInstance) => {
  const { getAllUsers, getUserByUserId } = userController;

  app.get("/", userSchemaV2.getAllUsers, getAllUsers);
  app.get("/:id", userSchemaV2.getUserByUserId, getUserByUserId);
};

export default userRouter;
