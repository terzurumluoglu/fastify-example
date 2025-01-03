import { FastifyRequest } from "fastify";
export type RequestWithUserId = FastifyRequest<{
  Params: { id: number };
}>;
