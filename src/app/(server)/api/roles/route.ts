import connectDb from "@/dbConfig";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import roleService from "../../_services/role.service";
import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";
import { NextRequest } from "next/server";

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
