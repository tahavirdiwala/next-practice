import roleService from "@/app/(server)/_services/role.service";
import commonDecorators from "@/app/(server)/common";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import connectDb from "@/dbConfig";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";

connectDb();
const { responser } = commonDecorators;

async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await context.params;
    const role = await roleService.get(ctx.id);
    return responser(MESSAGE.roles.get, StatusCodes.OK, role);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

export { GET };
