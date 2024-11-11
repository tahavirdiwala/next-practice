import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import Role from "@/models/role.model";
import commonDecorators from "@/common";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const role = new Role({ ...body });

    await role.save();
    return commonDecorators.responser("Role Created SuccessFully", 201);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}

export async function GET() {
  try {
    const roles = await Role.find();
    return commonDecorators.responser("Roles Fetched SuccessFully", 200, roles);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}
