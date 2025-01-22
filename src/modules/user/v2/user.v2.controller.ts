import { userService } from "./user.v2.service";
import { getAllUsers } from "../common/user.common.controller";
import { type User, type RequestWithId } from "@types";
import { type FastifyReply } from "fastify";
import { ErrorResponse } from "utils";
import { ISuccessResponse } from "@models";

const getUserByUserId = async (req: RequestWithId, reply: FastifyReply) => {
  const { id } = req.params;
  const user: User | undefined = await userService.getUserByUserId(id);

  if (!user) {
    throw new ErrorResponse(`Any User Found With id: ${id}`, 404);
  }
  const response: ISuccessResponse<User> = {
    success: true,
    code: 200,
    result: user,
  };
  reply.code(response.code).send(response);
};

export const userController = {
  getAllUsers,
  getUserByUserId,
};
