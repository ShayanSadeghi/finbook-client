import axios from "axios";

const APIURL = process.env.APIURL;

export async function loginApi(userData: any) {
  return axios
    .post(`${APIURL}/login/`, userData)
    .then(({ data }) => data)
    .catch((err) => err);
}
