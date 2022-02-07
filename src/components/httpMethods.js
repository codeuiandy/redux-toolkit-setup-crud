import axios from "axios";

export let baseUrl =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb";

export const httpPost = async (url, postBody) => {
  if (!navigator.onLine) {
    return alert("Please check your internet");
  }
  try {
    const res = await axios.post(`${baseUrl}/${url}`, postBody, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    return res.data;
  } catch (error) {
    return { er: error.response.data };
  }
};

export const httpGet = async (url) => {
  if (!navigator.onLine) {
    return alert("Please check your internet");
  }
  try {
    const res = await axios.get(`${baseUrl}/${url}`, {});
    return res.data;
  } catch (error) {
    return { er: error.response.data };
  }
};

export const httpDelete = async (url, postBody) => {
  if (!navigator.onLine) {
    return alert("Please check your internet");
  }
  try {
    const res = await axios.delete(`${baseUrl}/${url}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });
    return res;
  } catch (error) {
    return { er: error.response.data };
  }
};
