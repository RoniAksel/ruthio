import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "../../services";

export const initialState = {
    users: "",
    loading: false,
    error: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { getAllUsers } = usersSlice.actions;

export default usersSlice.reducer;