import commonDecorators from "@/app/(server)/_common";
import roleService from "@/app/(server)/_services/role.service";
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
    return responser(error as Error, StatusCodes.BAD_REQUEST);
  }
}

async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await context.params).id;
    await roleService.edit(id, request);
    return responser(MESSAGE.roles.edit, StatusCodes.OK);
  } catch (error) {
    return responser(error as Error, StatusCodes.BAD_REQUEST);
  }
}

export { GET, PUT };
