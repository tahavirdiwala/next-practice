import axios from "axios";

class RoleService {
  add(payload: unknown) {
    return axios.post("/api/roles", payload);
  }
  getAll() {
    return axios.get("/api/roles");
  }
}

const roleService = new RoleService();
export default roleService;
