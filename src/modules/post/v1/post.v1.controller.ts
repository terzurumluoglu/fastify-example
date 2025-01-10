import { type FastifyReply, type FastifyRequest } from "fastify";
import { postService } from "./post.v1.service";
import { type Post, type RequestWithUserId } from "@types";
import { ErrorResponse } from "utils";

const getAllPosts = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(200).send(postService.getAllPosts());
};

const getPostsByUserId = async (
  req: RequestWithUserId,
  reply: FastifyReply
) => {
  const { id } = req.params;
  reply.code(200).send(postService.getPostsByUserId(id));
};

const getPostByPostId = async (req: RequestWithUserId, reply: FastifyReply) => {
  const { id } = req.params;

  const post: Post | undefined = await postService.getPostByPostId(id);

  if (!post) {
    throw new ErrorResponse(`Any Post Found With id: ${id}`, 404);
  }
  reply.code(200).send(post);
};

export const postController = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
