import { type FastifyInstance } from "fastify";
import { postController } from "../../../controllers";

const postRouter = async (app: FastifyInstance) => {
  const { getAllPosts, getPostByPostId } = postController;

  app.get(
    "/",
    {
      schema: {
        description: "posts end points",
        tags: ["posts"],
      },
    },
    getAllPosts
  );
  app.get(
    "/:id",
    {
      schema: {
        description: "posts end points",
        tags: ["posts"],
      },
    },
    getPostByPostId
  );
};

export default postRouter;
