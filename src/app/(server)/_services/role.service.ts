import { RoleInterFace } from "@/interfaces/role";
import Role from "@/models/role.model";
import { NextRequest } from "next/server";

class RoleService {
  add(request: NextRequest): Promise<RoleInterFace> {
    return new Promise(async (resolve, reject) => {
      try {
        const body = await request.json();
        Role.create(body).then(resolve).catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }

  getAll(): Promise<RoleInterFace[]> {
    return new Promise((resolve, reject) => {
      Role.find().then(resolve).catch(reject);
    });
  }

  get(_id: string): Promise<RoleInterFace> {
    return new Promise((resolve, reject) => {
      Role.findOne({ _id }).then(resolve).catch(reject);
    });
  }
}

const roleService = new RoleService();
export default roleService;
