import axios from "axios";
class UserService {
  getAll() {
    return axios.get("/api/users/find-all");
  }
}

export default new UserService();
