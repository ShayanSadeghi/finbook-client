import axios from "axios";

const APIURL = "http://localhost:8000";

export async function loginApi(userData: any) {
  return axios
    .post(`${APIURL}/login/`, userData)
    .then(({ data }) => data)
    .catch((err) => err);
}
