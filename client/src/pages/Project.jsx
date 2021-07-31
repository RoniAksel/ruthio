import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../components/UserInterface/MainComp';
import { TaskList } from '../components/tasks/TaskList';
import { H1,H4 } from '../components/UserInterface/Headings';
import Select from 'react-select';
import { BlackColors } from '../components/UserInterface/Styles';

const options = [
    { value: 'ALL', label: 'All Tasks' },
    { value: 'ACTIVE', label: 'Active Tasks' },
    { value: 'INACTIVE', label: 'Completed Tasks' }
];

const customStyles = {
    control: () => ({
        width: "100%",
        display: "flex",
    })
}

export function Project() {

    const { tasks } = useSelector((state) => state.selectedProjectTasks);
    const title = useSelector((state) => state.selectedProjectDetails.title);
    return (
        <>
            {tasks &&
                <>
                    <Container  padding={"1rem"} display={"flex"} justify={"space-between"}>
                        <Container display={"flex"} align={"baseline"} style={{ flexGrow: 1 }}>
                            <H1 bold>{title}</H1>
                            <H4 fontColor={BlackColors.gray} style={{ marginLeft: "1em" }}>
                                Show:
                            </H4>
                            <Container width={"20%"}>
                                <Select
                                    styles={customStyles}
                                    options={options} />
                            </Container>
                        </Container>
                        <Container display={"flex"} align={"flex-end"}>
                            <H4 fontColor={BlackColors.gray} style={{ marginLeft: "1em" }}>Sort By</H4>
                    </Container>
                    </Container>
                    <Container padding={"1rem"}>
                        <TaskList tasks={tasks} />
                    </Container>
                </>
            }
        </>
    );
}
