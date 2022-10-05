import axios from "../Config/Axios";
export async function login() {
  return axios.post("users/login");
}
export async function signin() {
  return axios.post("/users");
}
