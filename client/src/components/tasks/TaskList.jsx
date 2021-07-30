import React from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { AvatarParent, SpanSmall } from "../UserInterface/MainComp";
import { Project } from '../../pages/Project';
import { Container } from '../UserInterface/MainComp';
import { BlackColors } from '../UserInterface/Styles';
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

export function TaskList({ tasks }) {

    function renderActiveTasks() {
        const active = tasks.filter((task) => task.isActive)
        return <>
            {active.map((task) => {
                return (
                    <>
                    <Container
                            display={"flex"}
                            style={{ flexDirection: "column" }}
                            bgColor={BlackColors.white}
                            margin={"1rem"}
                            bRadius={"10px"}

                        >                            <Container display={"flex"} justify={"space-between"}>
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
                    <H1>Active</H1>
                    {renderActiveTasks()}
                    <H1>Completed</H1>
                        {renderCompletedTasks()}

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
