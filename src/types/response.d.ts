type ReturnResponse<T> = Promise<{
  message: string;
  statusCode: number;
  data?: T;
}>;
