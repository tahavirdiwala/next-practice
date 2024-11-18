import connectDb from "@/dbConfig";
import { RESPONSE_MESSAGE as MESSAGE } from "@/app/lib/constant";
import userService from "../../_services/user.service";
import { StatusCodes } from "http-status-codes";
import commonDecorators from "../../_common";

await connectDb();
const { responser } = commonDecorators;

async function POST() {
  try {
    // await userService.add(request);
    await userService.add();
    return responser(MESSAGE.users.add, StatusCodes.CREATED);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

async function GET() {
  try {
    const users = await userService.getAll();
    return responser(MESSAGE.users.getAll, StatusCodes.OK, users);
  } catch (error) {
    return responser(`${error}`, StatusCodes.BAD_REQUEST);
  }
}

export { POST, GET };
