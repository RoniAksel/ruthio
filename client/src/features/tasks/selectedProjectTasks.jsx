import { createSlice } from "@reduxjs/toolkit";
import { getProjectTasks } from "../../services";


export const initialState = {
    tasks: [],
    loading: false,
    error: false
}

const selectedProjectTaskSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [getProjectTasks.fulfilled]: (state, action) => {
            state.tasks = action.payload;
        },
        [getProjectTasks.rejected]: (state, action) => {
            state.tasks = action.payload;
        },
    }
});

export const { getProjectTask } = selectedProjectTaskSlice.actions;

export default selectedProjectTaskSlice.reducer;