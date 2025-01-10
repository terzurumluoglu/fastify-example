import { type FastifyReply, type FastifyRequest } from "fastify";
import { userService } from "./user.common.service";

export const getAllUsers = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(userService.getAllUsers());
};
