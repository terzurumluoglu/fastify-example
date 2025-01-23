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

const getPostsBySearchText = async (text: string) => {
  const result: Post[] = POSTS.filter((post) =>
    [post.title, post.body].some((context) => context.includes(text))
  );
  return result;
};

export const postService = {
  getAllPosts,
  getPostByPostId,
  getPostsBySearchText,
  getPostsByUserId,
};
