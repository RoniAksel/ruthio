import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUser } from "../../services";

export const initialState = {
    user: "",
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { getUserData } = userSlice.actions;

export default userSlice.reducer;