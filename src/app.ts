import { join } from "path";
import { Server } from "./server/server";
import fastifyAutoload from "@fastify/autoload";

const { server } = Server.get();

const register = () => {
  // Add other registers
  registerPlugin();
};

const registerPlugin = async () => {
  const dir = join(__dirname, "plugins");
  server.register(fastifyAutoload, {
    dir,
  });
};
(() => {
  register();
})();
