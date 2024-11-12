import { UserInterFace } from "@/interfaces/user";
import Role from "@/models/role.model";
import User from "@/models/user.model";
import { NextRequest } from "next/server";

class UserService {
  add(request: NextRequest): Promise<UserInterFace> {
    return new Promise(async (resolve, reject) => {
      try {
        const body = await request.json();
        const user = new User(body);

        const role = await Role.findOne({ _id: body.role });

        if (role) {
          role.users.push(user._id);
          await role.save();
        } else {
          reject("Role does not exist");
        }
        user.save().then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(): Promise<UserInterFace[]> {
    return new Promise((resolve, reject) => {
      User.find().then(resolve).catch(reject);
    });
  }
}

const userService = new UserService();
export default userService;
