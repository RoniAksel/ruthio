import React, { useEffect, useState } from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { AvatarParent, SpanSmall, Tag } from "../UserInterface/MainComp";
import { Project } from '../../pages/Project';
import { Container } from '../UserInterface/MainComp';
import { BlackColors } from '../UserInterface/Styles';
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { Table, TH, TD, TR } from '../UserInterface/Table';
import ProgressBar from "@ramonak/react-progress-bar";
import { Colors } from '../UserInterface/Styles';
import { Modal } from '@material-ui/core';
import { TaskModal } from './TaskFull';

export function TaskList({ tasks }) {
    const [id, setId] = useState("");
    const [task, setTask] = useState(null);
    const [open, setOpen] = useState(false);

    const active = tasks.filter((task) => task.isActive);

    useEffect(() => {
        if (active.length > 0) {
            setTask({
                title: active[0].taskTitle,
                priority: active[0].priority,
                author: active[0].author,
                members: active[0].userIds,
                text: active[0].text,
                createdAt: timeStamp(active[0].createdAt)
            })
        }
    }, [])

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
                        <Container onClick={(e) => {
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
                            style={{ borderBottom: "1px solid #DDD" }}
                            padding={"1rem"}
                        >
                            <Container display={"grid"} gridTemplateColumns={"0.2fr 1.5fr"}>
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
                                            bgColor={Colors.primary}
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
                        {/* <TR onClick={(e) => {
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
                        }>
                            <TD >
                                <H4 bold>{task.taskTitle}</H4>
                            </TD>
                           
                            <TD>
                                {task.author.firstName} {task.author.lastName}
                            </TD>
                            <TD>{timeStamp(task.createdAt)}</TD>
                            <TD >
                                {task.priority === "Low" &&
                                    <Tag
                                        fontColor={BlackColors.white}
                                        bgColor={Colors.greenPrimary}
                                    >
                                        {task.priority}
                                    </Tag>
                                }
                                {task.priority === "Medium" &&
                                    <Tag
                                        fontColor={BlackColors.white}
                                        bgColor={Colors.primary}
                                    >
                                        {task.priority}
                                    </Tag>
                                }
                                {task.priority === "High" &&
                                    <Tag
                                        fontColor={BlackColors.white}
                                        bgColor={Colors.redLight}
                                    >
                                        {task.priority}
                                    </Tag>
                                }

                            </TD>
                            <TD>
                                <AvatarParent style={{ justifyContent: "flex-end" }}>
                                    <AvatarGroup max={4}>
                                        {task.userIds.map((user) => {
                                            return (<Tooltip title={`${user.firstName} ${user.lastName}`}>
                                                <Avatar src={user.picUrl}>
                                                </Avatar>
                                            </Tooltip>
                                            )
                                        })}
                                    </AvatarGroup>
                                </AvatarParent>
                            </TD>

                        </TR> */}
                    </>
                )
            })}
        </>
    }


    function renderCompletedTasks() {
        const completed = tasks.filter((task) => !task.isActive)
        return <>
            {completed.map((task) => {
                return (
                    <>
                        <Container
                            display={"flex"}
                            style={{ flexDirection: "column" }}
                            bgColor={BlackColors.white}
                            margin={"1rem"}
                            bRadius={"10px"}

                        >
                            <Container display={"flex"} justify={"space-between"}>
                                <H2 bold>{task.taskTitle}</H2>
                                <H4>Instructed By: {task.author.firstName} {task.author.lastName}</H4>
                            </Container>
                            <Container>
                                <H4>Description:</H4>
                                <div dangerouslySetInnerHTML={{ __html: task.text }}></div>
                            </Container>
                            <AvatarParent>
                                <AvatarGroup max={3}>
                                    {task.userIds.map((user) => {
                                        return (<Tooltip title={`${user.firstName} ${user.lastName}`}>
                                            <Avatar src={user.picUrl}>
                                            </Avatar>
                                        </Tooltip>
                                        )
                                    })}
                                </AvatarGroup>
                                <H4 fontColor={"#01161E"}>Team Members <SpanSmall>(Current: {task.userIds.length})</SpanSmall> </H4>
                            </AvatarParent>
                        </Container>
                    </>
                )
            })}
        </>
    }
    return (
        <>
            <Container>
                {tasks.length > 0 &&
                    <>
                        <Container border={BlackColors.divider} display={"grid"} gridTemplateColumns={"0.8fr 1.3fr 1fr"} gridTemplateRows={"0.1fr 1fr"}>
                        <Container style={{ gridRowStart: "1" }}>
                            <h2>hello</h2>
                        </Container>
                        <Container style={{ gridRowStart: "1" }}>
                            <h2>hello</h2>
                        </Container>
                        <Container style={{ gridRowStart: "1" }}>
                            <h2>hello</h2>
                            </Container>
                            <Container style={{ gridRowStart: "2" }}>
                                {renderActiveTasks()}
                            </Container>
                            <Container style={{ gridRowStart: "2" }}>
                                <TaskModal task={task} />
                            </Container>
                            <Container style={{ gridRowStart: "2" }}>
                                <TaskModal task={task} />
                            </Container>
                            {/* <Modal
                                open={open}
                                style={{ overflow: "scroll" }}
                                onClose={handleClose}>
                                <TaskModal task={task} close={handleClose} />
                            </Modal> */}
                        </Container>
                        {/* <H1>Completed</H1>
                        {renderCompletedTasks()} */}
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
