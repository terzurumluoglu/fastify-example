import { POSTS } from "@mock";
import { Post } from "@types";

const getAllPosts = async () => POSTS;

const getPostsByUserId = async (userId: number) => {
  return POSTS.filter((post) => post.userId === userId);
};

const getPostByPostId = async (postId: number) => {
  const result: Post | undefined = POSTS.find((post) => post.id === postId);
  return result;
};

export const postService = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
