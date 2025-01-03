import {
  fastify,
  FastifyReply,
  FastifyRequest,
  type FastifyInstance,
} from "fastify";

export class App {
  #server: FastifyInstance = fastify({
    logger: true,
  });

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
    this.#server.get(
      "/",
      async (request: FastifyRequest, reply: FastifyReply) => {
        reply.code(200).send({ message: "Hello World from Fastify Api" });
      }
    );
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
