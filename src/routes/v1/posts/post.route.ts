import { type FastifyInstance } from "fastify";
import { postController, schemaPostV1 } from "@modules/post/v1";

const postRouter = async (app: FastifyInstance) => {
  const { getAllPosts, getPostByPostId, getPostsBySearchText } = postController;

  app.get("/", schemaPostV1.getAllPosts, getAllPosts);
  app.get("/:id", schemaPostV1.getPostByPostId, getPostByPostId);
  app.get("/search", schemaPostV1.getPostsBySearchText, getPostsBySearchText);
};

export default postRouter;
