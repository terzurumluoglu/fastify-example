import { type FastifyInstance } from "fastify";
import fastifyAutoload from "@fastify/autoload";
import fp from "fastify-plugin";
import { join } from "path";
import { getGeneratedOptions } from "../constants";

export default fp((fastifyInstance: FastifyInstance) => {
  getGeneratedOptions().forEach((option) => {
    const {
      fastifySwagger,
      fastifySwaggerUi,
      swaggerOptions,
      swaggerUiOptions,
      version,
    } = option;
    fastifyInstance.register(async (fastify) => {
      fastify.register(fastifySwagger, { ...swaggerOptions });
      fastify.register(fastifySwaggerUi, { ...swaggerUiOptions });

      const dir = join(__dirname, "..", "routes", version);
      fastify.register(fastifyAutoload, {
        dir, // routes/v1, routes/v2 seperately
        options: { prefix: `/${version}` },
      });
    });
  });
});
