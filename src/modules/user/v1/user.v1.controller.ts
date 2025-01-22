import { userService } from "./user.v1.service";
import { getAllUsers } from "../common/user.common.controller";
import { type User, type RequestWithId } from "@types";
import { type FastifyReply } from "fastify";
import { ErrorResponse } from "utils";

const getUserByUserId = async (req: RequestWithId, reply: FastifyReply) => {
  const { id } = req.params;
  const user: User | undefined = await userService.getUserByUserId(id);

  if (!user) {
    throw new ErrorResponse(`Any User Found With id: ${id}`, 404);
  }
  reply.code(200).send(user);
};

export const userController = {
  getAllUsers,
  getUserByUserId,
};
