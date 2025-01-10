import { join } from "path";
import { Server } from "./server/server";
import fastifyAutoload from "@fastify/autoload";
import { errorHandler } from "helpers";

const { server } = Server.get();

const register = async () => {
  // Add other registers
  // ...
  server.setErrorHandler(errorHandler);

  const dir = join(__dirname, "plugins");
  server.register(fastifyAutoload, {
    dir,
  });
};

register();
