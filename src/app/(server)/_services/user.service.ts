import User from "@/models/user.model";
import { UserType } from "@/types/user";
import { NextRequest } from "next/server";

class UserService {
  add(request: NextRequest) {
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

        User.create(await request.json())
          .then(resolve)
          .catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(request: NextRequest): Promise<UserType[]> {
    return new Promise((resolve, reject) => {
      const userAddressPayload = Object.fromEntries(
        request.nextUrl.searchParams.entries()
      );

      User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "roleId",
            foreignField: "_id",
            as: "roleId",
          },
        },
        {
          $lookup: {
            from: "userdetails",
            localField: "_id",
            foreignField: "userId",
            as: "userDetails",
            pipeline: [
              {
                $group: {
                  _id: "$userId",
                  address: {
                    $addToSet: "$address",
                  },
                },
              },
              {
                $project: {
                  address: {
                    $reduce: {
                      input: "$address",
                      initialValue: [],
                      in: {
                        $concatArrays: ["$$this", "$$value"],
                      },
                    },
                  },
                },
              },
              {
                $lookup: {
                  from: "useraddresses",
                  localField: "address",
                  foreignField: "_id",
                  as: "address",
                  pipeline: [
                    {
                      $match: userAddressPayload,
                    },
                  ],
                },
              },
            ],
          },
        },
      ])
        .then(resolve)
        .catch(reject);

      // UserDetail.updateMany(
      //   { userId: "67381ea3632da24bf8196bf9" },
      //   {
      //     $set: {
      //       address: ["673c158c57ba358508ca16ba"],
      //     },
      //   }
      // )
      //   .then(resolve)
      //   .catch(reject);
    });
  }
}

const userService = new UserService();
export default userService;
