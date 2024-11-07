import axios from "axios";
class UserService {
  getAll() {
    return axios.get("https://dummyjson.com/users");
  }
}

export default new UserService();
