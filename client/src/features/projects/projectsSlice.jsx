import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getProjects } from "../../services";


export const projectAdapter = createEntityAdapter();
export const projectSelectors = projectAdapter.getSelectors((state)=> state.projects)

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
        }
    }
});

export const { getProject } = projectSlice.actions;

export default projectSlice.reducer;