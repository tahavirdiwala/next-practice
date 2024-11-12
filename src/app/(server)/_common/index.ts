import { NextResponse } from "next/server";

class CommonDecorators {
  responser<T>(message: string, statusCode: number, data?: T) {
    return NextResponse.json({ message, statusCode, data });
  }
  trpcResponser<T>(message: string, statusCode: number, data?: T) {
    return { message, statusCode, data };
  }
}

const commonDecorators = new CommonDecorators();
export default commonDecorators;
