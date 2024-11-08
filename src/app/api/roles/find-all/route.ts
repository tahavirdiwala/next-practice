import connectDb from "@/dbConfig";
import { NextResponse } from "next/server";
import Role from "@/models/role.model";

await connectDb();

export async function GET() {
  try {
    const roles = await Role.find();
    return NextResponse.json({
      statusCode: 200,
      message: "Roles Fetched SuccessFully",
      data: roles,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
