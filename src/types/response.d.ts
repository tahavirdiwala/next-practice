import { NextResponse } from "next/server";

type ReturnResponse<T> = Promise<
  NextResponse<{
    message: string;
    statusCode: number;
    data?: T;
  }>
>;
