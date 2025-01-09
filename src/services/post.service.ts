import { POSTS } from "@mock";
import { Post } from "@types";
import { generateResponse } from "@utils";

const getAllPosts = async () => POSTS;

const getPostsByUserId = async (userId: number) => {
  return POSTS.filter((post) => post.userId === userId);
};

const getPostByPostId = async (postId: number) => {
  const result: Post | undefined = POSTS.find((post) => post.id === postId);

  return result;

  if (!result) {
    // return generateResponse({
    //   success: false,
    //   error: `Any posts found with Id: ${postId}`,
    // });
  }

  // return generateResponse({
  //   success: false,
  //   message: "The post loaded succesfully",
  //   result,
  // });
};

export const postService = {
  getAllPosts,
  getPostByPostId,
  getPostsByUserId,
};
