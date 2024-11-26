import axios from "axios";
import { GET } from "../_plugins/api.plugin";
import { RoleType } from "@/types/role";

class RoleService {
  add(payload: unknown) {
    return axios.post("/api/roles", payload);
  }
  getAll() {
    return GET<RoleType[]>("/roles");
  }
}

const roleService = new RoleService();
export default roleService;
