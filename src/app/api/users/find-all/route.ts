import connectDb from "@/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/user.model";

connectDb();

export async function GET() {
  try {
    const users = await User.find();

    return NextResponse.json({
      statusCode: 200,
      message: "Users Fetched SuccessFully",
      data: users,
    });
  } catch (error) {
    console.log("error", error);

    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
