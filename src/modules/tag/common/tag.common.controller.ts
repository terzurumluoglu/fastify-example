import { type FastifyReply, type FastifyRequest } from "fastify";
import { tagServiceCommon } from "./tag.common.service";
import { ISuccessResponse } from "@models";
import { Tag } from "@types";

export const getAllTags = async (_: FastifyRequest, reply: FastifyReply) => {
  const response: ISuccessResponse<Tag[]> = {
    success: true,
    code: 200,
    result: await tagServiceCommon.getAllTags(),
  };
  reply.code(response.code).send(response);
};
