import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from "fastify";
import { IErrorResponse } from "@models";
import { ErrorResponse } from "utils";

export const errorHandler: FastifyInstance["errorHandler"] = (
  error: any,
  _: FastifyRequest,
  reply: FastifyReply
) => {
  if (error instanceof ErrorResponse) {
    const errorResponse: IErrorResponse = {
      success: false,
      error: error.name,
      details: error.message,
      code: error.statusCode,
    };
    return reply.code(errorResponse.code).send(errorResponse);
  }

  if (error.validation) {
    const errorResponse: IErrorResponse = {
      success: false,
      error: error.message,
      details: error.validation,
      code: 400,
    };
    return reply.code(400).send(errorResponse);
  }

  if (error.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  const errorResponse: IErrorResponse = {
    success: false,
    error: error.message || "Server Error",
    details: error.message || "Server Error",
    code: error.statusCode || 500,
  };
  return reply.code(errorResponse.code).send(errorResponse);
};
