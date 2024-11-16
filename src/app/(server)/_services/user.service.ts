import User from "@/models/user.model";
import { UserType } from "@/types/user";

class UserService {
  // add() {
  //   return new Promise(async (resolve, reject) => {
  //     try {


  //       console.time("time taken");
  //       const total = 100000;
  //      const roleId= "6737773170f15091b7fc47de"
        
  //       const temp =[];

  //       for(let i=0;i<total;i++) {
  //         temp.push(roleId)
  //       }

  //       await Promise.allSettled([User.create({
  //         name: "User",
  //         email: "useremail",
  //         roleId: temp
  //       })])
  //       console.timeEnd("time taken");

  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }

  getAll(): Promise<UserType[]> {
    return new Promise((resolve, reject) => {
      console.time("time taken");
      User.find().populate("roleId").then(resolve).catch(reject);
      console.timeEnd("time taken");
    });
  }
}

const userService = new UserService();
export default userService;
