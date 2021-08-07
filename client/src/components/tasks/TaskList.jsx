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



export function TaskList({ tasks }) {
    const [id, setId] = useState("");
    const [task, setTask] = useState(null);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (tasks.length > 0) {
            return (
                setTask({
                    title: tasks[0].taskTitle,
                    priority: tasks[0].priority,
                    author: tasks[0].author,
                    members: tasks[0].userIds,
                    text: tasks[0].text,
                    createdAt: timeStamp(tasks[0].createdAt)
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

    function renderActiveTasks() {
        const active = tasks.filter((task) => task.isActive);

        return <>
            {active.map((task) => {
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
                                createdAt: timeStamp(task.createdAt)
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
            <Container border={BlackColors.divider} display={"grid"} gridTemplateColumns={"0.8fr 1.3fr 1fr"} gridTemplateRows={"0.1fr 1fr"} bgColor={BlackColors.white}>
                <Container
                    style={{ gridRowStart: "1", borderBottom: `1px solid ${BlackColors.divider}` }}
                    display={"flex"}
                    justify={"center"} 
                    align={"center"}>
                    <Input width={"80%"} placeholder={`Search Tasks`}></Input>
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
                    <H2>Somthing Goes Here</H2>
                </Container>
                <Container style={{ gridRowStart: "2" }}>
                {renderActiveTasks()}
                </Container>
                <Container style={{ gridRowStart: "2" }}>
                    <TaskFull task={task} />
                </Container>
                <Container style={{ gridRowStart: "2" }} style={{paddingTop:"0.5rem"}}>
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
