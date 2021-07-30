import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectsSlice'
import tasksSlice from '../features/tasks/tasksSlice';
import userSlice from '../features/users/userSlice'
import usersSlice from '../features/users/usersSlice'
import selectedProjectSlice from '../features/projects/selectedProjectSlice'
import selectedProjectTaskSlice from '../features/tasks/selectedProjectTasks';

export const store = configureStore({
    reducer: {
        projects: projectSlice,
        user: userSlice,
        users: usersSlice,
        tasks: tasksSlice,
        selectedProjectDetails: selectedProjectSlice,
        selectedProjectTasks: selectedProjectTaskSlice,
    }
});




