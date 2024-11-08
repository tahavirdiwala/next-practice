import connectDb from "@/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";

await connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = new User({ ...body });

    await user.save();
    return NextResponse.json({
      message: "User Created SuccessFully",
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
