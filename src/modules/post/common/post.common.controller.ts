import { type FastifyReply, type FastifyRequest } from "fastify";
import { postServiceCommon } from "./post.common.service";
import { ISuccessResponse } from "@models";
import { Post } from "@types";

export const getAllPosts = async (_: FastifyRequest, reply: FastifyReply) => {
  const response: ISuccessResponse<Post[]> = {
    success: true,
    code: 200,
    result: await postServiceCommon.getAllPosts(),
  };
  reply.code(response.code).send(response);
};
