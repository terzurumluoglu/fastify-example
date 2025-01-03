import { FastifyHttp2SecureOptions } from "fastify";

const logger = {
  transport: {
    target: "pino-pretty",
  },
};

export const options: Partial<FastifyHttp2SecureOptions<any>> = {
  logger,
};
