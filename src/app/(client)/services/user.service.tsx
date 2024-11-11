import axios from "axios";

class UserService {
  add(payload: unknown) {
    return axios.post("/api/users", payload);
  }
  getAll() {
    return axios.get("/api/users");
  }
}

const userService = new UserService();
export default userService;
