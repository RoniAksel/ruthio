import React, { useState } from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container, AvatarParent, SpanSmall, Divider } from '../UserInterface/MainComp';
import { Colors, BlackColors } from '../UserInterface/Styles';
import { AvatarGroup } from "@material-ui/lab";
import { Tooltip, Avatar } from "@material-ui/core";
import { FiMoreHorizontal } from "react-icons/fi";
import { StyledExit } from '../UserInterface/LinkStyle';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsFileText } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";


export function TaskModal({ task, close }) {
    console.log(task)
    return (
        <>
            {task && 
                <Container  bgColor={BlackColors.white} padding={"1em"} style={{overflow:"hidden", height:"80vh"}}>
                    <Container>
                        <H2 margin bold>{task.title}</H2>
                        <H4 margin fontColor={BlackColors.gray}>
                            Added by <span style={{ color: Colors.primary, fontWeight: "600" }}>{task.author.firstName} {task.author.lastName}</span>
                            <span style={{ margin: "0.25rem" }}>On {task.createdAt}</span>
                        </H4>
                        <Container gridTemplateColumns={"1fr 1fr" } margin={ "1rem 0" } display={"grid"}>
                            <Container>
                                <H4 bold fontColor={BlackColors.gray}>ASSIGNED TO</H4>
                                <AvatarGroup max={9}>
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
                            <Container>
                                <H4 bold fontColor={BlackColors.gray}>DUE DATE</H4>
                                <H4 bold fontColor={BlackColors.secondary}>Tue, 21 May, 2021</H4>
                              </Container>          
                        </Container>
                        <Container display={"grid"} gridTemplateColumns={"0.2fr 3fr"}>
                            <Container>
                                <BsFileText/>
                            </Container>
                            <Container>
                                <H4 bold>Description</H4>
                                <Divider/>
                                <Container
                                    dangerouslySetInnerHTML={{ __html: task.text }}></Container>
                            </Container>
                        </Container>
                        <Container display={"grid"} gridTemplateColumns={"0.2fr 3fr"}>
                            <Container>
                                <FaRegComments/>
                            </Container>
                            <Container>
                                <H4 bold>Comments</H4>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            }
                
        </>
    );
}
