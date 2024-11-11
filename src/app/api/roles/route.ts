import connectDb from "@/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Role from "@/models/role.model";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const role = new Role({ ...body });

    await role.save();
    return NextResponse.json({
      message: "Role Created SuccessFully",
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}

export async function GET() {
  try {
    const roles = await Role.find().populate("users");
    return NextResponse.json({
      statusCode: 200,
      message: "Roles Fetched SuccessFully",
      data: roles,
    });
  } catch (error) {
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
