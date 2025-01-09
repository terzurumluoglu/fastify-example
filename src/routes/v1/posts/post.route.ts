import { FastifySchema, type FastifyInstance } from "fastify";
import { postController } from "@controllers";

const postRouter = async (app: FastifyInstance) => {
  const { getAllPosts, getPostByPostId } = postController;

  const schema: FastifySchema = {
    params: {
      type: "object",
      properties: {
        id: {
          type: "number",
        },
      },
      required: ["id"],
    },
    response: {},
  };

  app.get(
    "/",
    {
      schema: {
        description: "Get All Posts That Recorded On The Database",
        tags: ["posts"],
      },
    },
    getAllPosts
  );
  app.get(
    "/:id",
    {
      schema: {
        description: "Get Only One Post by Unique PostId",
        tags: ["posts"],
        params: {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
          },
          required: ["id"],
        },
      },
    },
    getPostByPostId
  );
};

export default postRouter;
