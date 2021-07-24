import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

// User Services
export const getUser = createAsyncThunk(
  "user/getUser",
  async () => await await (await axios.get(`${BASE_URL}/auth/getUserData`)).data
)

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => await await (await axios.get(`${BASE_URL}/auth/getAllUsers`)).data
)

// Project Services

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => await await (await axios.get(`${BASE_URL}/projects`)).data
);

export const postProject = createAsyncThunk(
  "projects/postProjects",
  async () => await await (await axios.post(`${BASE_URL}/projects`))
);

// Tasks Services

export const getTasks = createAsyncThunk(
  "projects/getProjects",
  async () => await await (await axios.get(`${BASE_URL}/tasks`)).data
);


