import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ErrorResponse } from "utils/error.response";

export const errorHandler: FastifyInstance["errorHandler"] = (
  err: any,
  _: FastifyRequest,
  reply: FastifyReply
) => {
  console.log("********************************************");
  console.log(err);
  let error = { ...err };
  error.message = err.message;

  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  return reply.code(error.statusCode || 500).send({
    success: false,
    error: error.message || "Server Error",
  });
};
