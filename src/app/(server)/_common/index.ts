import { NextResponse } from "next/server";

class CommonDecorators {
  responser<T>(message: string, statusCode: number, data?: T) {
    return NextResponse.json({ message, statusCode, data });
  }
  trpcResponser<T>(dispatch: string | Error, statusCode: number, data?: T) {
    if (dispatch.hasOwnProperty("message")) {
      dispatch = dispatch["message" as keyof typeof dispatch];
    }
    return { message: dispatch, statusCode, data };
  }
}

const commonDecorators = new CommonDecorators();
export default commonDecorators;
