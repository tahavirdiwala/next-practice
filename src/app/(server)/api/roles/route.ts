import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import commonDecorators from "@/common";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import roleService from "../../_services/role.service";

connectDb();

export async function POST(request: NextRequest) {
  try {
    await roleService.add(request);
    return commonDecorators.responser(MESSAGE.roles.add, 201);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}

export async function GET() {
  try {
    const roles = await roleService.getAll();
    return commonDecorators.responser(MESSAGE.roles.getAll, 200, roles);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}
