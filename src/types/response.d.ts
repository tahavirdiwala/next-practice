type GETResponse<T> = Promise<{
  message: string;
  statusCode: number;
  data?: T;
}>;
