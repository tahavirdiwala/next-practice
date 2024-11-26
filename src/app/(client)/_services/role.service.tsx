import { GET, POST } from "../_plugins/api.plugin";
import { RoleType } from "@/types/role";

class RoleService {
  add(payload: RoleType) {
    return POST<RoleType>("/roles", payload);
  }

  getAll() {
    return GET<RoleType[]>("/roles");
  }
}

const roleService = new RoleService();
export default roleService;
