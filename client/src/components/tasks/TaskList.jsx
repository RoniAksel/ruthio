import React, { useEffect, useState } from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { AvatarParent, Input, SpanSmall, Tag } from "../UserInterface/MainComp";
import { Project } from '../../pages/Project';
import { Container } from '../UserInterface/MainComp';
import { BlackColors } from '../UserInterface/Styles';
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Table, TH, TD, TR } from '../UserInterface/Table';
import ProgressBar from "@ramonak/react-progress-bar";
import { Colors } from '../UserInterface/Styles';
import { Modal } from '@material-ui/core';
import { TaskFull } from './TaskFull';
import { TaskDetails } from './TaskDetails';
import { TaskTitleHeader } from './TaskTitleHeader';
import { TaskStatusHeader } from './TaskStatusHeader';



export function TaskList({ tasks }) {
    const [id, setId] = useState("");
    const [task, setTask] = useState(null);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (tasks.length > 0) {
            return (
                setTask({
                    title: tasks.slice(-1)[0].taskTitle,
                    priority: tasks.slice(-1)[0].priority,
                    author: tasks.slice(-1)[0].author,
                    members: tasks.slice(-1)[0].userIds,
                    text: tasks.slice(-1)[0].text,
                    createdAt: timeStamp(tasks.slice(-1)[0].createdAt),
                    active: tasks.slice(-1)[0].isActive
                })
            )

        }
    }, [tasks])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function timeStamp(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    function renderActiveTasks(searchInput) {
        let lowerCase = searchInput.toLowerCase();
        
        const active = tasks.filter((task) =>
            task.taskTitle.toLowerCase().includes(lowerCase)
            || task.priority.toLowerCase().includes(lowerCase)
            || task.text.toLowerCase().includes(lowerCase)
            || task.author.firstName.toLowerCase().includes(lowerCase)
            || task.author.lastName.toLowerCase().includes(lowerCase)
        );

        const sorted = active.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt))
        console.log(sorted)



        return <>
            {sorted.map((task) => {
                return (
                    <>
                        <Container
                            display={"flex"}
                            direction={"column"}
                            style={{overflow:"hidden", borderBottom: `1px solid ${BlackColors.divider}`}}
                            bgHover={BlackColors.hover}
                            onClick={(e) => {
                            setTask({
                                title: task.taskTitle,
                                priority: task.priority,
                                author: task.author,
                                members: task.userIds,
                                text: task.text,
                                createdAt: timeStamp(task.createdAt),
                                active: task.isActive

                            })
                            handleOpen()
                        }
                        }
                            bgColor={"white"}
                            padding={"1rem"}
                        >
                            <Container
                                display={"grid"}
                                gridTemplateColumns={"0.2fr 1.5fr"}
                                style={{ cursor: "pointer" }}
                            >
                                <Container>
                                    {task.priority === "Low" &&
                                        <Container
                                            bRadius={"50%"}
                                            width={"20px"}
                                            height={"20px"}
                                            fontColor={BlackColors.white}
                                            bgColor={Colors.greenPrimary}
                                        >
                                        </Container>
                                    }
                                    {task.priority === "Medium" &&
                                        <Container
                                            bRadius={"50%"}
                                            width={"20px"}
                                            height={"20px"}
                                            fontColor={BlackColors.white}
                                            bgColor={Colors.yellowPrimary}
                                        >
                                        </Container>
                                    }
                                    {task.priority === "High" &&
                                        <Container
                                            bRadius={"50%"}
                                            width={"20px"}
                                            height={"20px"}
                                            fontColor={BlackColors.white}
                                            bgColor={Colors.redPrimary}
                                        >
                                        </Container>
                                    }
                                </Container>
                                <Container>
                                    <Container display={"flex"} justify={"space-between"}>
                                        <H4 bold>{task.taskTitle}</H4>
                                        <H4 fontColor={BlackColors.gray}> {timeStamp(task.createdAt)}</H4>
                                    </Container>
                                    <Container>
                                        <H4 fontColor={BlackColors.light}>By:  {task.author.firstName} {task.author.lastName}</H4>
                                    </Container>
                                </Container>
                            </Container>

                        </Container>
                    </>
                )
            })}
        </>
    }

    function renderTasks() {
        return (
            <Container border={BlackColors.divider} display={"grid"} gridTemplateColumns={"0.8fr 1.6fr 0.8fr "} gridTemplateRows={"0.1fr 1fr"} bgColor={BlackColors.white} height={"100vh"}>
                <Container
                    style={{ gridRowStart: "1", borderBottom: `1px solid ${BlackColors.divider}` }}
                    display={"flex"}
                    justify={"center"} 
                    align={"center"}>
                    <Input
                        width={"80%"}
                        placeholder={`Search Tasks`}
                        onChange={(e)=> setSearchInput(e.target.value)}
                        value={searchInput}
                    >
                        </Input>
                </Container>
                <Container
                    style={{ gridRowStart: "1",borderBottom: `1px solid ${BlackColors.divider}`, borderLeft: `1px solid ${BlackColors.divider}`,   borderRight: `1px solid ${BlackColors.divider}` }}
                    display={"flex"}
                    align={"center"}
                >
                    <TaskTitleHeader task={task}/>
                </Container>
                <Container
                    style={{ gridRowStart: "1", borderBottom: `1px solid ${BlackColors.divider}` }}
                    display={"flex"}
                    align={"center"}
                >
                    <TaskStatusHeader task={task}/>
                </Container>
                <Container style={{ gridRowStart: "2", overflowY:"scroll", borderRight: `1px solid ${BlackColors.divider}`} }>
                {renderActiveTasks(searchInput)}
                </Container>
                <Container style={{ gridRowStart: "2" }}>
                    <TaskFull task={task} />
                </Container>
                <Container style={{ gridRowStart: "2", borderLeft: `1px solid ${BlackColors.divider}`, paddingTop:"0.5rem" }}>
                    <TaskDetails task={task} />
                </Container>
            </Container>
        )
    }

    return (
        <>
            <Container>
                {tasks.length > 0 &&
                    <>
                        {renderTasks()}
                    </>
                }
                {tasks.length === 0 &&
                    <>
                        <div>
                            No Tasks to Display
                        </div>
                    </>
                }
            </Container>
        </>
    );
}
