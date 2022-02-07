import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpGet } from "../../components/httpMethods";

export const getUsers = createAsyncThunk("users/getUsers", async (id) => {
  const response = await httpGet("data");
  console.log(response);
  return response;
});
