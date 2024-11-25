import Role from "@/models/role.model";
import { RoleType } from "@/types/role";
import mongoose from "mongoose";
import { NextRequest } from "next/server";

class RoleService {
  add(request: NextRequest): Promise<RoleType> {
    return new Promise(async (resolve, reject) => {
      try {
        const payload = await request.json();
        Role.create(payload).then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(): Promise<RoleType[]> {
    return new Promise((resolve, reject) => {
      // Role.find().then(resolve).catch(reject);
      Role.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "users",
            foreignField: "_id",
            as: "users",
            pipeline: [
              {
                $project: {
                  roleId: 0,
                  userDetails: 0,
                },
              },
            ],
          },
        },
      ])
        .then(resolve)
        .catch(reject);
    });
  }

  get(_id: string): Promise<RoleType> {
    return new Promise((resolve, reject) => {
      // Role.findOne({ _id }).then(resolve).catch(reject);
      const objectId = new mongoose.Types.ObjectId(_id);
      Role.aggregate([
        {
          $match: {
            _id: objectId,
          },
        },
      ])
        .then((resp) => {
          resolve(resp[0]);
        })
        .catch(reject);
    });
  }

  edit(id: string, request: NextRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const role = await Role.findOne({ _id: id });

        const payload = await request.json();

        role.users.push(...payload.users);

        role.save().then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }
}

const roleService = new RoleService();
export default roleService;
