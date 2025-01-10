import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from "fastify";
import { ErrorResponse } from "utils";

export const errorHandler: FastifyInstance["errorHandler"] = (
  error: any,
  _: FastifyRequest,
  reply: FastifyReply
) => {
  if (error instanceof ErrorResponse) {
    return reply.status(error.statusCode).send({
      error: error.name,
      message: error.message,
    });
  }

  if (error.validation) {
    return reply.status(400).send({
      error: "Validation Error",
      message: error.message,
      details: error.validation,
    });
  }

  if (error.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  return reply.code(error.statusCode || 500).send({
    success: false,
    error: error.message || "Server Error",
  });
};
