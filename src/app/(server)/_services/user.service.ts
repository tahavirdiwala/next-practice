import { UserInterFace } from "@/types/user";
import Role from "@/models/role.model";
import User from "@/models/user.model";

class UserService {
  add(request: UserInterFace) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = new User(request);

        const role = await Role.findOne({ _id: request.role });

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
      User.find()
        .populate({
          path: "role",
          populate: {
            path: "users",
            model: "User",
          },
        })
        .then(resolve)
        .catch(reject);
    });
  }
}

const userService = new UserService();
export default userService;
