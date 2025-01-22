import { FastifyRequest } from "fastify";
export type RequestWithId = FastifyRequest<{
  Params: { id: number };
}>;

export type RequestWithTags = FastifyRequest<{
  Params: { tags: string };
}>;
