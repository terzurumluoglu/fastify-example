import { type FastifyReply, type FastifyRequest } from "fastify";
import { postService } from "./post.v1.service";
import { type Post, type RequestParamsWithId } from "@types";
import { ErrorResponse } from "utils";
import { ISuccessResponse } from "@models";

const getAllPosts = async (_: FastifyRequest, reply: FastifyReply) => {
  const response: ISuccessResponse<Post[]> = {
    success: true,
    code: 200,
    result: await postService.getAllPosts(),
  };
  reply.code(response.code).send(response);
};

const getPostsByUserId = async (
  req: RequestParamsWithId,
  reply: FastifyReply
) => {
  const { id } = req.params;

  const response: ISuccessResponse<Post[]> = {
    success: true,
    code: 200,
    result: await postService.getPostsByUserId(id),
  };
  reply.code(response.code).send(response);
};

const getPostByPostId = async (
  req: RequestParamsWithId,
  reply: FastifyReply
) => {
  const { id } = req.params;

  const post: Post | undefined = await postService.getPostByPostId(id);

  if (!post) {
    throw new ErrorResponse(`Any Post Found With id: ${id}`, 404);
  }

  const response: ISuccessResponse<Post> = {
    success: true,
    code: 200,
    result: post,
  };
  reply.code(response.code).send(response);
};

export const postController = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
