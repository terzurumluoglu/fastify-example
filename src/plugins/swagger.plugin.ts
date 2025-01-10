import {
  type FastifyReply,
  type FastifyRequest,
  type FastifyInstance,
} from "fastify";
import fastifyAutoload from "@fastify/autoload";
import fp from "fastify-plugin";
import { join } from "path";
import { getGeneratedOptions } from "../constants";
import { createReadStream } from "fs";

export default fp((fastifyInstance: FastifyInstance) => {
  addRootRoute(fastifyInstance);

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

const addRootRoute = (fastifyInstance: FastifyInstance) => {
  fastifyInstance.register((fastify) => {
    fastify.get("/", (_: FastifyRequest, reply: FastifyReply) => {
      try {
        const path = join(__dirname, "..", "public", "index.html");
        const stream = createReadStream(path);
        reply.type("text/html").send(stream);
      } catch (error) {
        reply.code(200).send({
          message: "Fastify Api is Running...",
        });
      }
    });
  });
};
