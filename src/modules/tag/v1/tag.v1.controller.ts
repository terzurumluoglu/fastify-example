import { type FastifyReply } from "fastify";
import { tagService } from "./tag.v1.service";
import { type RequestBodyWithTags, type Post } from "@types";
import { type ISuccessResponse } from "@models";
import { getAllTags, getTagsByTagKeys } from "../common/tag.common.controller";

const getPostsByTags = async (
  req: RequestBodyWithTags,
  reply: FastifyReply
) => {
  const { tags } = req.body;
  const posts = await tagService.getPostsByTags(tags);

  const response: ISuccessResponse<Post[]> = {
    success: true,
    code: 200,
    result: posts,
  };
  reply.code(response.code).send(response);
};

export const tagController = {
  getAllTags,
  getTagsByTagKeys,
  getPostsByTags,
};
