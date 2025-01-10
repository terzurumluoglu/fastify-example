import { type FastifyReply, type FastifyRequest } from "fastify";
import { postServiceCommon } from "./post.common.service";

export const getAllPosts = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(await postServiceCommon.getAllPosts());
};
