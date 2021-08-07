import React from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container, Divider } from '../UserInterface/MainComp';
import { Colors, BlackColors } from '../UserInterface/Styles';
import { AvatarGroup } from "@material-ui/lab";
import { Tooltip, Avatar } from "@material-ui/core";
import { FaEllipsisV } from 'react-icons/fa';



export function TaskDetails({ task }) {
    return (
        <>
            {task &&
                <Container padding={"0 0.5rem"}>
                    <Container display={"flex"} justify={"space-between"}>
                        <Container display={"flex"}>
                            <Avatar src={task.author.picUrl}></Avatar>
                            <Container style={{ marginLeft: "0.5rem" }}>
                                <H4 bold>{task.author.firstName} {task.author.lastName}</H4>
                                <H4 fontColor={BlackColors.gray}>Author</H4>
                            </Container>
                        </Container>
                    <Container>
                        <FaEllipsisV/>
                        </Container>
                    </Container>
                    <Divider />
                    <Container display={"flex"} justify={"space-between"}>
                        <H4 bold>Priority</H4>
                        {task.priority === "Low" && <>
                            <H4 fontColor={Colors.greenPrimary}>Low</H4>
                        </>}
                        {task.priority === "Medium" && <>
                            <H4 fontColor={Colors.yellowPrimary}>Medium</H4>
                        </>}
                        {task.priority === "High" && <>
                            <H4 fontColor={Colors.redPrimary}>High</H4>
                        </>}
                    </Container>
                    <Divider />
                    <Container display={"flex"} justify={"space-between"}>
                        <H4 bold>Members</H4>
                        <AvatarGroup max={5}>
                            {task.members.map((user) => {
                                return (<Tooltip title={`${user.firstName} ${user.lastName}`}>
                                    <Avatar src={user.picUrl}>
                                        {user.firstName.slice(0, 1).toUpperCase()}.
                                        {user.lastName.slice(0, 1).toUpperCase()}{" "}
                                    </Avatar>
                                </Tooltip>
                                )
                            })}
                        </AvatarGroup>
                    </Container>
                    <Divider />
                    <Container display={"flex"} justify={"space-between"}>
                        <H4 bold>Added On</H4>
                        <H4 fontColor={BlackColors.gray}>{task.createdAt}</H4>
                    </Container>
                    <Divider />
                    <Container display={"flex"} justify={"space-between"}>
                        <H4 bold>Due Date</H4>
                        <H4 fontColor={BlackColors.gray}>{task.createdAt}</H4>
                    </Container>
                </Container>
            }

        </>
    );
}
