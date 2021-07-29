import { createSlice } from "@reduxjs/toolkit";
import { getProjects, postProject } from "../../services";


export const initialState = {
    projects: [],
    loading: false,
    error: false
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    extraReducers: {
        [getProjects.fulfilled]: (state, action) => {
            state.projects = action.payload;
        },
        [getProjects.rejected]: (state, action) => {
            state.projects = action.payload;
        },
        [postProject.fulfilled]: (state, action) => {
            state.projects = action.payload;
        }
    }
});

export const { getProject } = projectSlice.actions;

export default projectSlice.reducer;