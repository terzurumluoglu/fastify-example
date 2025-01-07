import { fastify, type FastifyInstance } from "fastify";
import { options } from "../constants";

export class Server {
  #server: FastifyInstance = fastify(options);

  static #instance: Server;

  static get(): Server {
    if (!this.#instance) {
      this.#instance = new Server();
    }
    return this.#instance;
  }

  private constructor() {
    this.#listen();
  }

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
