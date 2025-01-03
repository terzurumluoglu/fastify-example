import { FastifyInstance } from "fastify";
import { userController } from "../controllers";

export const userRouter = async (app: FastifyInstance) => {
  const { getAllUsers, getUserByUserId } = userController;
  app.get("/", getAllUsers);
  app.get("/:id", getUserByUserId);
};
