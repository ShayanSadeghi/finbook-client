import axios from "axios";

const APIURL = process.env.APIURL;

export async function getAccounts(token: String) {
  return axios
    .get(`${APIURL}/accounts/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}
