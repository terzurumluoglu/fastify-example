export interface ISuccessResponse<T> {
  success: boolean;
  code: number;
  result: T;
}
