import connectDb from "@/dbConfig";
import { NextRequest } from "next/server";
import Role from "@/models/role.model";
import User from "@/models/user.model";
import commonDecorators from "@/common";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";

connectDb();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = new User({ ...body });

    const role = await Role.findOne({ _id: body.role });

    if (role) {
      role.users.push(user._id);
      await role.save();
    } else {
      return commonDecorators.responser("Role does not exist", 401);
    }

    await user.save();
    return commonDecorators.responser(MESSAGE.roles.add, 201);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}

export async function GET() {
  try {
    const users = await User.find();
    return commonDecorators.responser(MESSAGE.roles.getAll, 200, users);
  } catch (error) {
    return commonDecorators.responser(`${error}`, 500);
  }
}
