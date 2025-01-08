import { join } from "path";
import { Server } from "./server/server";
import fastifyAutoload from "@fastify/autoload";
import { type FastifyReply, type FastifyRequest } from "fastify";
import { HTML } from "@constants";
// import { createReadStream } from "fs";

const { server } = Server.get();

const register = () => {
  // Add other registers
  registerPlugin();
};

const registerPlugin = async () => {
  server.get("/", (req: FastifyRequest, reply: FastifyReply) => {
    // try {
    //   const path = join(__dirname, "index.html");
    //   const stream = createReadStream(path);
    //   reply.type("text/html").send(stream);
    // } catch (error) {}
    reply.type("text/html").send(HTML);
  });
  const dir = join(__dirname, "plugins");
  server.register(fastifyAutoload, {
    dir,
  });
};
(() => {
  register();
})();
