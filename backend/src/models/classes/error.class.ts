export class AppError extends Error {
  statusCode: number;

  constructor({ message, status = 500 }: { message: string; status?: number }) {
    super(message);

    this.statusCode = status;
  }
}
