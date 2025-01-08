import { join } from "path";
import { Server } from "./server/server";
import fastifyAutoload from "@fastify/autoload";
import { type FastifyReply, type FastifyRequest } from "fastify";
import { createReadStream } from "fs";

const { server } = Server.get();

const register = () => {
  // Add other registers
  registerPlugin();
};

const registerPlugin = async () => {
  server.get("/", (_: FastifyRequest, reply: FastifyReply) => {
    try {
      const path = join(__dirname, "public", "index.html");
      const stream = createReadStream(path);
      reply.type("text/html").send(stream);
    } catch (error) {
      reply.code(200).send({
        message: "Fastify Api is Running...",
      });
    }
  });
  const dir = join(__dirname, "plugins");
  server.register(fastifyAutoload, {
    dir,
  });
};
(() => {
  register();
})();
