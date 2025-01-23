import { FastifyRequest } from "fastify";
export type RequestParamsWithId = FastifyRequest<{
  Params: { id: number };
}>;

export type RequestParamsWithTags = FastifyRequest<{
  Params: { tags: string };
}>;

export type RequestBodyWithTags = FastifyRequest<{
  Body: { tags: string };
}>;
