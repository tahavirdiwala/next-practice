import User from "@/models/user.model";
import { NextRequest } from "next/server";

class UserService {
  add(request: NextRequest) {
    return new Promise(async (resolve, reject) => {
      console.log("request", request);
      try {
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(): Promise<UserType[]> {
    return new Promise((resolve, reject) => {
      User.find().then(resolve).catch(reject);
    });
  }
}

const userService = new UserService();
export default userService;
