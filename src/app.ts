import { join } from "path";
import { Server } from "./server/server";
import fastifyAutoload from "@fastify/autoload";
import { errorHandler } from "helpers";
import cors from "@fastify/cors";

const { server } = Server.get();

const register = async () => {
  // Add other registers
  // ...
  server.setErrorHandler(errorHandler);

  server.register(cors, {
    methods: "*",
    origin: "*",
  });

  const dir = join(__dirname, "plugins");
  server.register(fastifyAutoload, {
    dir,
  });
};

register();
