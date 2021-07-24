import React, { useEffect, useState } from "react";
import { Card, Grid, Tag, H4, H2, FlexJustify, AvatarParent, SpanSmall, Logo, Container } from "./UserInterface/MainComp";
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../services";
import { BlackColors, Colors } from "./UserInterface/Styles";


export function ProjectsList({ projects }) {

  const [projectId, setProjectId] = useState("");
  const dispatch = useDispatch();

   function renderProjects() {
    return  projects.map(project => {
      return <Card shadowColor={project.style.shadowColor} key={project._id}>
        <Container display={"flex"} justify={"space-between"}>
          <Container>
            Project Status: {project.isActive ? <Tag fontColor={BlackColors.white} bgColor={Colors.greenPrimary}>Active</Tag> : <Tag>Not Active</Tag>}
          </Container>
          <div>
            <span>File Number:</span><Tag fontColor={Colors.primary} bgColor={Colors.lightest}>{project.projectFileNumber}</Tag>
          </div>
        </Container>
        <Container onClick={id => setProjectId(project._id)} display={"flex"} direction={"column"} align={"center"}>
          {project.style.logoUrl && <Logo width={"8rem"} src={project.style.logoUrl} alt="logo"></Logo>}
          <H2 txtAlign={"center"}>{project.projectName}</H2>
        </Container>
        <AvatarParent>
          <AvatarGroup max={3}>
            {project.userIds.map((user) => {
              return (<Tooltip title={`${user.firstName} ${user.lastName}`}>
                <Avatar src={user.picUrl}>
                  {user.firstName.slice(0, 1).toUpperCase()}.
                  {user.lastName.slice(0, 1).toUpperCase()}{" "}
                </Avatar>
              </Tooltip>
              )
            })}
          </AvatarGroup>
          <H4 fontColor={"#01161E"}>Team Members <SpanSmall>(Current: {project.userIds.length})</SpanSmall> </H4>
        </AvatarParent>
      </Card>
    })
  }

  async function deleteProject() {
    try {
      console.log(projectId)
      await axios.delete(`http://localhost:5000/projects/${projectId}`);
      dispatch(getProjects())
    } catch (err) {
    }
  }


  return (
    <Grid>{renderProjects()}</Grid>

  );
}

