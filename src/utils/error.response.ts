export class ErrorResponse extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = "ErrorResponse";
    this.statusCode = statusCode;
  }
}
