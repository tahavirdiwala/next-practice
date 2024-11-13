import { NextResponse } from "next/server";

type GETResponse<T> = Promise<
  NextResponse<{
    message: string;
    statusCode: number;
    data?: T;
  }>
>;

type GETTRPCResponse<T> = Promise<{
  message: string | Error;
  statusCode: number;
  data?: T;
}>;
