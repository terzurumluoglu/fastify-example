import { postService } from "../services";
import { RequestWithUserId } from "../types";

const getAllPosts = async () => postService.getAllPosts();

const getPostsByUserId = async (req: RequestWithUserId) => {
  const { id } = req.params;
  return postService.getPostsByUserId(+id);
};

const getPostByPostId = async (req: RequestWithUserId) => {
  const { id } = req.params;
  return postService.getPostByPostId(+id);
};

export const postController = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
