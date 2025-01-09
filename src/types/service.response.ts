export type ServiceSuccessResponse<T> = {
  success: boolean;
  message?: string;
  result: T;
};

export type ServiceErrorResponse = {
  success: boolean;
  error: string;
};
