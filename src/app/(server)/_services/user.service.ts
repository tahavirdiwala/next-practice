import { DefaultPagination as Pagination } from "@/app/lib/constant";
import User from "@/models/user.model";
import UserRole from "@/models/userRoles.model";
import { NextRequest } from "next/server";

class UserService {
  add(request: NextRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const payload = await request.json();
        User.create(payload)
          .then(async (resp) => {
            await UserRole.create({ userId: resp._id, roleId: payload.roleId })
              .then(resolve)
              .catch(reject);
          })
          .catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(request: NextRequest): Promise<UserType[]> {
    const searchParams = request.nextUrl.searchParams;

    const userDetailsPage = Number(searchParams.get("page")) || Pagination.page;
    const userDetailsLimit =
      Number(searchParams.get("limit")) || Pagination.limit;

    return new Promise((resolve, reject) => {
      try {
        User.aggregate([
          {
            $lookup: {
              from: "userroles",
              localField: "_id",
              foreignField: "userId",
              as: "userRoles",
            },
          },
          {
            $lookup: {
              from: "roles",
              localField: "userRoles.roleId",
              foreignField: "_id",
              as: "userRoles",
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
                  $skip: (userDetailsPage - 1) * userDetailsLimit,
                },
                {
                  $limit: userDetailsLimit,
                },
              ],
            },
          },
          {
            $lookup: {
              from: "useraddresses",
              localField: "userDetails.address",
              foreignField: "_id",
              as: "address",
            },
          },
          {
            $project: {
              "userDetails.address": false,
            },
          },
        ])
          .then(resolve)
          .catch(reject);

        // const tempArray = [
        //   {
        //     userId: "673807121d1f346d91557143",
        //     roleId: "673c7c867822e57df8a48a18",
        //   },
        //   {
        //     userId: "673807121d1f346d91557143",
        //     roleId: "673c7c947822e57df8a48a1a",
        //   },
        //   {
        //     userId: "673807121d1f346d91557143",
        //     roleId: "673c7c9b7822e57df8a48a1c",
        //   },
        // ];

        // UserRole.insertMany(tempArray).then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  edit() {
    return new Promise(async (resolve, reject) => {
      try {
        // const batchSize = 1000;
        // const total = 100000;
        // for (let i = 0; i < total; i += batchSize) {
        //   const batchPromises = [];
        //   for (let j = 0; j < batchSize && i + j < total; j++) {
        //     batchPromises.push(
        //       UserRole.create({
        //         userId: "673807121d1f346d91557143",
        //         roleId: "6737773170f15091b7fc47de",
        //       })
        //     );
        //   }
        //   await Promise.allSettled(batchPromises);
        // }
        // UserDetail.updateMany(
        //   {},
        //   {
        //     userId: "673807121d1f346d91557143",
        //   }
        // )
        //   .then(resolve)
        //   .catch(reject);
        // UserDetail.updateMany(
        //   { userId: "673807121d1f346d91557143" },
        //   {
        //     $set: {
        //       address: ["673af319cc131bfeaecea904"],
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
}

const userService = new UserService();
export default userService;
