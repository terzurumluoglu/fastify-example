import { userService } from "@services";
import { type RequestWithUserId } from "@types";
import { FastifyReply } from "fastify";
import { ErrorResponse } from "utils/error.response";

const getAllUsers = async () => userService.getAllUsers();

const getUserByUserId = async (req: RequestWithUserId, reply: FastifyReply) => {
  const { id } = req.params;
  const user = await userService.getUserByUserId(id);
  if (!user) {
    throw new ErrorResponse(`Any User Found with id:${id}`, 404);
  }
  reply.code(200).send(user);
};

export const userController = {
  getAllUsers,
  getUserByUserId,
};
