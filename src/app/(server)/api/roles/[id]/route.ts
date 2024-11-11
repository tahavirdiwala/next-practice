import roleService from "@/app/(server)/_services/role.service";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import commonDecorators from "@/common";
import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";

connectDb();

async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const ctx = await context.params;
    const role = await roleService.get(ctx.id);
    return commonDecorators.responser(MESSAGE.roles.get, 200, role);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}

export { GET };
