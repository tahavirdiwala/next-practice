import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import commonDecorators from "@/common";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import userService from "../../_services/user.service";

connectDb();

export async function POST(request: NextRequest) {
  try {
    await userService.add(request);
    return commonDecorators.responser(MESSAGE.users.add, 201);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 401);
  }
}

export async function GET() {
  try {
    const users = await userService.getAll();
    return commonDecorators.responser(MESSAGE.roles.getAll, 200, users);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}
