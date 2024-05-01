import axios from "axios";

const APIURL = process.env.APIURL;

export async function addTransaction(token: String, data: any) {
  return axios
    .post(`${APIURL}/transaction/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}

export async function getTransactions(token: String) {
  return axios
    .get(`${APIURL}/transaction/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}
