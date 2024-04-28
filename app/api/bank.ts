import axios from "axios";

const APIURL = process.env.APIURL;

export async function getBanks() {
  return axios
    .get(`${APIURL}/banks/`)
    .then(({ data }) => data)
    .catch((err) => err);
}
