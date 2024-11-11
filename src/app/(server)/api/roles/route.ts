import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import commonDecorators from "@/common";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import roleService from "../../_services/role.service";
import { StatusCodes } from "http-status-codes";

connectDb();
const { responser } = commonDecorators;

async function POST(request: NextRequest) {
  try {
    await roleService.add(request);
    return responser(MESSAGE.roles.add, StatusCodes.CREATED);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

async function GET() {
  try {
    const roles = await roleService.getAll();
    return responser(MESSAGE.roles.getAll, StatusCodes.OK, roles);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

export { POST, GET };
