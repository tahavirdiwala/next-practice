import User from "@/models/user.model";

class UserService {
  // add(request: NextRequest) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const payload = await request.json();
  //       User.create(payload).then(resolve).catch(reject);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }

  add() {
    return new Promise(async (resolve, reject) => {
      try {

          console.time("time taken")
          for(let i=0;i<100000;i++) {
            User.create({
              name: `User ${i}`,
              email: `user${i}@example.com`,
              roleId:
                i % 2 === 0
                  ? "673776f770f15091b7fc47d6"
                  : "6737773170f15091b7fc47de",
            })
            .then(resolve)
            .catch(reject);
          }
          console.timeEnd('time taken');
       


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
