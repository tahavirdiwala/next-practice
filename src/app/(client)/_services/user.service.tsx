import { GET, POST } from "../_plugins/api.plugin";

class UserService {
  add(payload: object) {
    return POST("/users", payload);
  }
  getAll() {
    return GET("/users");
  }
}

const userService = new UserService();
export default userService;
