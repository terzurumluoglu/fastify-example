import { fastify, type FastifyInstance } from "fastify";
import { options } from "@constants";
import { initialEnvironment } from "helpers";
import { EnvConfig } from "@types";

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
      await initialEnvironment(this.#server);
      const { MESSAGE, PORT: port } = this.#server.config as EnvConfig;
      await this.#server.listen({ port });
      const message: string = MESSAGE.split("{{PORT}}").join(port + "");
      console.log(message);
    } catch (err) {
      this.#server.log.error(err);
      process.exit(1);
    }
  };

  get server() {
    return this.#server;
  }
}
