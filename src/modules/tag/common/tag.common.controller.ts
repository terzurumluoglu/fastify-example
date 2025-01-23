import { type FastifyReply, type FastifyRequest } from "fastify";
import { tagServiceCommon } from "./tag.common.service";
import { ISuccessResponse } from "@models";
import { type RequestParamsWithTags, type Tag } from "@types";

export const getAllTags = async (_: FastifyRequest, reply: FastifyReply) => {
  const response: ISuccessResponse<Tag[]> = {
    success: true,
    code: 200,
    result: await tagServiceCommon.getAllTags(),
  };
  reply.code(response.code).send(response);
};

export const getTagsByTagKeys = async (
  req: RequestParamsWithTags,
  reply: FastifyReply
) => {
  const { tags } = req.params;

  console.log(tags);
  const response: ISuccessResponse<Tag[]> = {
    success: true,
    code: 200,
    result: await tagServiceCommon.getTagsByKeys(tags),
  };
  console.log(response);
  reply.code(response.code).send(response);
};
