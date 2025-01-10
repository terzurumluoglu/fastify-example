import { ENVIRONMENT } from "@constants";
import fastifyEnv from "@fastify/env";
import { FastifyInstance } from "fastify";
import { join } from "path";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      // this should be same as the confKey in options
      // specify your typing here
    };
  }
}

export const initialEnvironment = async (server: FastifyInstance) => {
  const environment = process.env.ENVIRONMENT || "development";
  const path = join(
    __dirname,
    "..",
    "environments",
    `environment.${environment}.env`
  );
  await server.register(fastifyEnv, {
    dotenv: {
      path,
      debug: false,
    },
    schema: ENVIRONMENT.schema,
  });
};
