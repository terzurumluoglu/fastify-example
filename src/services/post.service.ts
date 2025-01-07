import { POSTS } from "../mock";

const getAllPosts = async () => POSTS;

const getPostsByUserId = async (userId: number) => {
  return POSTS.filter((post) => post.userId === userId);
};

const getPostByPostId = async (postId: number) => {
  return POSTS.find((post) => post.id === postId);
};

export const postService = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
