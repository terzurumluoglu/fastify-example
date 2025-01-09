import {
  type ServiceErrorResponse,
  type ServiceSuccessResponse,
} from "types/service.response";

const generateSuccessResponse = <T>(
  result: T,
  message: string
): ServiceSuccessResponse<T> => {
  return {
    success: true,
    result,
    message,
  } as ServiceSuccessResponse<T>;
};

const generateErrorResponse = (error: string): ServiceErrorResponse => {
  return {
    success: false,
    error,
  } as ServiceErrorResponse;
};

export const generateResponse = <T>(response: {
  success: boolean;
  result?: T;
  message?: string | undefined;
  error?: string | undefined;
}) => {
  const { success } = response;
  if (success) {
    const { message, result } = response;
    return generateSuccessResponse(result, message);
  } else {
    const { error } = response;
    return generateErrorResponse(error);
  }
};
