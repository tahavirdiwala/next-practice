import { NextResponse } from "next/server";

class CommonDecorators {
  responser<T>(dispatch: string | Error, statusCode: number, data?: T) {
    if (dispatch.hasOwnProperty("message"))
      dispatch = dispatch["message" as keyof typeof dispatch];

    return NextResponse.json({ message: dispatch, statusCode, data });
  }
}

const commonDecorators = new CommonDecorators();
export default commonDecorators;
