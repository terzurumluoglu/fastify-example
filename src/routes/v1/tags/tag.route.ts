import { type FastifyInstance } from "fastify";
import { schemaTagV1, tagController } from "@modules/tag/v1";

const tagRoutes = async (app: FastifyInstance) => {
  app.get("/", schemaTagV1.getAllTags, tagController.getAllTags);
  app.get("/:tags", schemaTagV1.getTagsByKeys, tagController.getTagsByTagKeys);
  app.get(
    "/search",
    schemaTagV1.getTagsBySearchText,
    tagController.getTagsBySearchText
  );

  app.post("/posts", schemaTagV1.getPostsByTags, tagController.getPostsByTags);
};

export default tagRoutes;
