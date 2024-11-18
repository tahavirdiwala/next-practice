import connectDb from "@/dbConfig";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import userService from "../../_services/user.service";
import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";
import { NextRequest } from "next/server";

await connectDb();
const { responser } = commonDecorators;

async function POST(request: NextRequest) {
  try {
    await userService.add(request);
    return responser(MESSAGE.users.add, StatusCodes.CREATED);
  } catch (error) {
    return responser(error as Error, StatusCodes.BAD_REQUEST);
  }
}

async function GET(request: NextRequest) {
  try {
    const users = await userService.getAll(request);
    return responser(MESSAGE.users.getAll, StatusCodes.OK, users);
  } catch (error) {
    return responser(error as Error, StatusCodes.BAD_REQUEST);
  }
}

async function PUT() {
  try {
    // await userService.edit(request);
    await userService.edit();
    return responser(MESSAGE.users.edit, StatusCodes.OK);
  } catch (error) {
    return responser(error as Error, StatusCodes.BAD_REQUEST);
  }
}

export { POST, GET, PUT };
