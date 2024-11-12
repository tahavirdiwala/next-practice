import { RoleInterFace } from "@/types/role";
import Role from "@/models/role.model";

class RoleService {
  add(request: RoleInterFace): Promise<RoleInterFace> {
    return new Promise(async (resolve, reject) => {
      try {
        Role.create(request).then(resolve).catch(reject);
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
