import { type FastifyReply } from "fastify";
import { tagService } from "./tag.v1.service";
import { tagServiceCommon } from "../common/tag.common.service";
import { type RequestWithTags, type RequestWithId } from "@types";

const getAllTags = async (req: RequestWithId, reply: FastifyReply) => {
  reply.code(200).send(await tagServiceCommon.getAllTags());
};

const getPostsByTags = async (req: RequestWithTags, reply: FastifyReply) => {
  const { tags } = req.params;
  const tagKeys: string[] = tags.split(",");
  const posts = await tagService.getPostsByTags(tagKeys);
  reply.code(200).send(posts);
};

export const tagController = {
  getAllTags,
  getPostsByTags,
};
