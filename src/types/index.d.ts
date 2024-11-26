type ApiResponse<T> = {
  data: T;
  message: string;
  redirect: string;
  status: string;
  statusCode: string;
};
