import { type FastifyReply, type FastifyRequest } from "fastify";
import { userService } from "./user.common.service";
import { ISuccessResponse } from "@models";
import { Post, User } from "@types";

export const getAllUsers = async (_: FastifyRequest, reply: FastifyReply) => {
  const response: ISuccessResponse<User[]> = {
    success: true,
    code: 200,
    result: await userService.getAllUsers(),
  };
  reply.code(response.code).send(response);
};
