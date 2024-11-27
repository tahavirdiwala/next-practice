import Role from "@/models/role.model";
import { RoleType } from "@/types/role";
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

  getAll(payload: NextRequest): Promise<RoleType[]> {
    return new Promise((resolve, reject) => {
      const { page = 1, limit = 100 } = Object.fromEntries(
        payload.nextUrl.searchParams.entries()
      );

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
        {
          $skip: (Number(page) - 1) * Number(limit),
        },
        {
          $limit: Number(limit),
        },
      ])
        .then(resolve)
        .catch(reject);
    });
  }

  get(_id: string): Promise<RoleType> {
    return new Promise((resolve, reject) => {
      Role.findOne({ _id }).then(resolve).catch(reject);
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
