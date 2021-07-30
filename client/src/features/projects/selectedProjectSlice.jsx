import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    id: "Loading",
    title: "Loading"
}

const selectedProjectSlice = createSlice({
    name: 'selectedProject',
    initialState,
    reducers: {
        setProjectIds: (state, action) => {
            state.id = action.payload;
        },
        setProjectTitle: (state, action) => {
            state.title = action.payload;
        }
    },
});

export const { setProjectIds, setProjectTitle } = selectedProjectSlice.actions;

export default selectedProjectSlice.reducer;