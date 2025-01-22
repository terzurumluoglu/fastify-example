import { type FastifyReply, type FastifyRequest } from "fastify";
import { tagServiceCommon } from "./tag.common.service";

export const getAllTags = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(await tagServiceCommon.getAllTags());
};
