import axios from "axios";

const APIURL = process.env.APIURL;

export async function getResources() {
  return axios
    .get(`${APIURL}/resource/`)
    .then(({ data }) => data)
    .catch((err) => err);
}

export async function getCategories() {
  return axios
    .get(`${APIURL}/category/`)
    .then(({ data }) => data)
    .catch((err) => err);
}
