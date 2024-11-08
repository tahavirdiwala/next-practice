import connectDb from "@/dbConfig";
import { NextResponse } from "next/server";
import Role from "@/models/role.model";

connectDb();

export async function GET() {
  try {
    const roles = await Role.find();
    return NextResponse.json({
      statusCode: 200,
      message: "Roles Fetched SuccessFully",
      data: roles,
    });
  } catch (error) {
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
