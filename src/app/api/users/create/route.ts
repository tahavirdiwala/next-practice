import connectDb from "@/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import Role from "@/models/role.model";

await connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = new User({ ...body });

    const role = await Role.findOne({ _id: body.role });

    if (role) {
      role.users.push(user._id);
      await role.save();
    } else {
      NextResponse.json({
        statusCode: 401,
        message: "Role does not exist",
      });
    }

    await user.save();
    return NextResponse.json({
      message: "User Created SuccessFully",
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: error, statusCode: 500 });
  }
}
