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

  getAll(): Promise<UserType[]> {
    return new Promise( (resolve, reject) => {
      User.aggregate([
        {
          $lookup: {
            from: "userroles",
            localField: "_id",
            foreignField: "userId",
            as: "userRoles"
          } 
        }, {
          $unwind: {
            path: "$userRoles",
            preserveNullAndEmptyArrays: true, 
          },
        },
        {
          $lookup: {
            from: "roles",
            localField: "userRoles.roleId",
            foreignField: "_id",
            as: "roleDetails",
          },
        },
        {
          $group: {
            _id: "$_id",
            name: { $first: "$name" },
            email: { $first: "$email" },
            userRoles: { $push: "$userRoles" },
            roles: { $push: { $arrayElemAt: ["$roleDetails", 0] } },
          },
        }, {
          $project: {
            name:1,
            email:1,
            "roles":1
          }
        }
      ]).then(resolve).catch(reject)
    })
  }

  edit() {
    return new Promise(async (resolve, reject) => {
      try {
        console.time("time taken");
        const batchSize = 1000; 
        const total = 100000;
        
        for (let i = 0; i < total; i += batchSize) {
          const batchPromises = [];
          for (let j = 0; j < batchSize && i + j < total; j++) {
            batchPromises.push(
              UserRole.create({
                userId: "673807121d1f346d91557143",
                roleId: "6737773170f15091b7fc47de",
              })
            );
          }
          await Promise.allSettled(batchPromises);
        }
        console.timeEnd("time taken");
        resolve("Insertion completed");
      } catch (error) {
        reject(error);
      }
    });
  }
  
}

const userService = new UserService();
export default userService;
