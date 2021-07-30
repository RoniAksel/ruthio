import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../components/UserInterface/MainComp';
import { TaskList } from '../components/tasks/TaskList';
import { H1 } from '../components/UserInterface/Headings';

export function Project() {

    const { tasks } = useSelector((state) => state.selectedProjectTasks);
    const title = useSelector((state) => state.selectedProjectDetails.title);
    return (
        <>
            {tasks &&
                <>
                <Container padding={"1rem"}>
                <H1 bold>
                { title }
                </H1>
                <TaskList tasks={tasks}/>
                </Container>
                </> 
            }
        </>
    );
}
