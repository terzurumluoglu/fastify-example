import {
  fastify,
  FastifyReply,
  FastifyRequest,
  type FastifyInstance,
} from "fastify";
import { userRouter } from "./routes";
import { options } from "./constants";

export class App {
  #server: FastifyInstance = fastify(options);

  static #instance: App;

  static get(): App {
    if (!this.#instance) {
      this.#instance = new App();
    }
    return this.#instance;
  }

  private constructor() {
    this.initialRoute();
    this.#listen();
  }

  initialRoute = () => {
    this.#server.get("/", (_: FastifyRequest, reply: FastifyReply) => {
      reply.code(200).send({ message: "Hello World from Fastify Api" });
    });
    this.#server.register(userRouter, { prefix: "/users" });
  };

  #listen = async () => {
    try {
      await this.#server.listen({ port: 3000 });
      console.log("Server started successfully");
    } catch (err) {
      process.exit(1);
    }
  };

  get server() {
    return this.#server;
  }
}

//Functional
// export const App = () => {
//   const server: FastifyInstance = fastify({
//     logger: true,
//   });
//   initialRoute(server);
//   listen(server);
//   return server;
// };

// const initialRoute = (server: FastifyInstance) => {
//   server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
//     reply.code(200).send({ message: "Hello World from Fastify Api" });
//   });
// };

// const listen = async (server: FastifyInstance) => {
//   try {
//     await server.listen({ port: 3000 });
//     console.log("Server started successfully");
//   } catch (err) {
//     process.exit(1);
//   }
// };
