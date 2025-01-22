import { type FastifyReply } from "fastify";
import { tagService } from "./tag.v1.service";
import { type Post, type RequestWithTags } from "@types";
import { type ISuccessResponse } from "@models";
import { getAllTags } from "../common/tag.common.controller";

const getPostsByTags = async (req: RequestWithTags, reply: FastifyReply) => {
  const { tags } = req.params;
  const tagKeys: string[] = tags.split(",");
  const posts = await tagService.getPostsByTags(tagKeys);

  const response: ISuccessResponse<Post[]> = {
    success: true,
    code: 200,
    result: posts,
  };
  reply.code(response.code).send(response);
};

export const tagController = {
  getAllTags,
  getPostsByTags,
};
