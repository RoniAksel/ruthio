import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectsSlice'
import userSlice from '../features/users/userSlice'
import usersSlice from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        projects: projectSlice,
        user: userSlice,
        users: usersSlice,
    }
});




