import { RoleInterFace } from "@/types/role";
import Role from "@/models/role.model";

class RoleService {
  add(request: RoleInterFace): Promise<RoleInterFace> {
    return new Promise((resolve, reject) => {
      Role.create(request).then(resolve).catch(reject);
    });
  }

  getAll(): Promise<RoleInterFace[]> {
    return new Promise((resolve, reject) => {
      Role.find().populate("users").then(resolve).catch(reject);
    });
  }

  get(_id: string): Promise<RoleInterFace> {
    console.log("_id", _id);

    return new Promise((resolve, reject) => {
      Role.findOne({ _id }).then(resolve).catch(reject);
    });
  }
}

const roleService = new RoleService();
export default roleService;
