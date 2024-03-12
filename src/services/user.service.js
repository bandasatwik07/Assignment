import axios from "axios";

const { BACKEND_URL } = process.env;

// Creating a global instance of Axios with default configuration
const axiosInstance = axios.create({
  withCredentials: true,
});

class UserService {
  constructor() {
    // You can use the BACKEND_URL from environment variables if available
    // this.url = BACKEND_URL;
    // this.url = "http://localhost:8000";
    this.url = "https://suzan-be.vercel.app";
  }


  getCurrentUser() {
    return axiosInstance.get(`${this.url}/api/users/currentuser`);
  }

  getUserById(userId) {
    return axiosInstance.get(
      `${this.url}/api/users/getuser/${userId}`
    );
  }

  // Function to delete user by ID
  deleteUserById(userId) {
    return axiosInstance.delete(
      `${this.url}/api/users/deleteuser/${userId}`
    );
  }

  // Function to update user by ID
  updateUserById(userId, userData) {
    return axiosInstance.put(
      `${this.url}/api/users/updateuser/${userId}`,
      userData
    );
  }
}

export default new UserService();
