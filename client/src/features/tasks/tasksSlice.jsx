import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../../services";


export const initialState = {
    tasks: [],
    loading: false,
    error: false
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [getTasks.fulfilled]: (state, action) => {
            state.tasks = action.payload;
        },
        [getTasks.rejected]: (state, action) => {
            state.tasks = action.payload;
        },
    }
});

export const { getTask } = taskSlice.actions;

export default taskSlice.reducer;