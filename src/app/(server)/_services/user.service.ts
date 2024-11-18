import User from "@/models/user.model";
// import UserDetail from "@/models/userDetail.model";
import { UserType } from "@/types/user";

class UserService {
  add() {
    return new Promise(async (resolve, reject) => {
      try {
        // const total = 100000;
        // const roleId = "6737773170f15091b7fc47de";
        // const temp = [];
        // for (let i = 0; i < total; i++) {
        //   temp.push(roleId);
        // }
        // await Promise.allSettled([
        //   User.create({
        //     name: "User",
        //     email: "useremail",
        //     roleId: temp,
        //   }),
        // ]);
        // const total = 100000;
        // const userId = "67381ea3632da24bf8196bf9";
        // const temp = [];
        // for (let i = 0; i < total; i++) {
        //   temp.push({
        //     userId,
        //     state: `Gujarat ${i}`,
        //     city: `Ahmedabad ${i}`,
        //     address: [
        //       {
        //         name: "vatwa",
        //       },
        //     ],
        //     designation: "Developer",
        //   });
        // }
        // await Promise.allSettled([UserDetail.create(temp)]);
        // await User.updateOne(
        //   { _id: "67381ea3632da24bf8196bf9" },
        //   {
        //     $set: {
        //       userDetails: userDetail,
        //     },
        //   }
        // )
        //   .then(resolve)
        //   .catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(): Promise<UserType[]> {
    return new Promise((resolve, reject) => {
      User.find()
        .populate(["roleId", "userDetails"])
        .then(resolve)
        .catch(reject);
      // UserDetail.find().then(resolve).catch(reject);
    });
  }
}

const userService = new UserService();
export default userService;
