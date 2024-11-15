import Role from "@/models/role.model";

class RoleService {
  add(request: RoleType): Promise<RoleType> {
    return new Promise((resolve, reject) => {
      Role.create(request).then(resolve).catch(reject);
    });
  }

  getAll(): Promise<RoleType[]> {
    return new Promise((resolve, reject) => {
      Role.find().then(resolve).catch(reject);
    });
  }

  get(_id: string): Promise<RoleType> {
    return new Promise((resolve, reject) => {
      Role.findOne({ _id }).then(resolve).catch(reject);
    });
  }
}

const roleService = new RoleService();
export default roleService;
