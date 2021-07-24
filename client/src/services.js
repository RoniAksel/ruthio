import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => await await (await axios.get(`${BASE_URL}/projects`)).data
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async () => await await (await axios.get(`${BASE_URL}/auth/getUserData`)).data
)

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => await await (await axios.get(`${BASE_URL}/auth/getAllUsers`)).data
)