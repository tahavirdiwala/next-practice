import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import userService from "../../_services/user.service";
import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";
import { UserInterFace } from "@/types/user";

await connectDb();
const { responser } = commonDecorators;

async function POST(request: UserInterFace) {
  try {
    await userService.add(request);
    return responser(MESSAGE.users.add, StatusCodes.CREATED);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

async function GET() {
  try {
    const users = await userService.getAll();
    return responser(MESSAGE.users.getAll, StatusCodes.OK, users);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

export { POST, GET };
