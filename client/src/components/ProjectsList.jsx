import React, { useEffect, useState } from "react";
import { Card, Grid, Tag, H4, H2, FlexJustify, AvatarParent, SpanSmall, Logo, Container } from "./UserInterface/MainComp";
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../services";
import { BlackColors, Colors } from "./UserInterface/Styles";
import { Divider } from "./UserInterface/MainComp";
import { setProjectIds, setProjectTitle } from "../features/projects/selectedProjectSlice"
import { getProjectTasks } from "../services";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";


export function ProjectsList({ projects }) {

  const [projectId, setProjectId] = useState("projectId");
  const dispatch = useDispatch();

  function renderActiveProjects() {
    const active = projects.filter((project) => project.isActive);
    return active.map(project => {
      return <Card
        onClick={id => {
          setProjectId(project._id);
          dispatch(getProjectTasks(project._id))
          dispatch(setProjectIds(project._id))
          dispatch(setProjectTitle(project.projectName))

        }}
        shadowColor={project.style.shadowColor}
        key={project._id}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Link
          to="/project">
          <Container
            display={"flex"} justify={"flex-end"}>
            <Tooltip title={"File Number"}>
              <Tag fontColor={Colors.primary} bgColor={Colors.lightest}>{project.projectFileNumber}</Tag>
            </Tooltip>
          </Container>
          <Container
            display={"flex"}
            justify={"center"}
            align={"center"}
            style={{ flexGrow: '1' }}>
            <Container display={"flex"} align={"center"} justify={"center"} bRadius={"5px"} width={"2.5em"} height={"2.5em"} border={BlackColors.divider} >
              {project.style.logoUrl ? <Logo src={project.style.logoUrl} width={"3rem"}></Logo> : <H2>{project.projectName.slice(0, 1).toUpperCase()}</H2>}
            </Container>
            {/* {project.style.logoUrl && <Logo width={"8rem"} src={project.style.logoUrl} alt="logo"></Logo>} */}
            <H2 style={{ marginLeft: "1rem" }}>{project.projectName}</H2>
          </Container>
          <Container style={{ marginBottom: "1em" }}>
            <ProgressBar labelSize={"0.65rem"} height={"10px"} bgColor={Colors.greenPrimary} completed={60} />
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
        </Link>

      </Card>
    })
  }

  function renderInactiveProjects() {
    const inActive = projects.filter((project) => !project.isActive);
    return inActive.map(project => {
      return <Card
        shadowColor={BlackColors.gray}
        key={project._id}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Container display={"flex"} justify={"space-between"}>
          <Container>
            {project.isActive ? <Tag fontColor={BlackColors.white} bgColor={Colors.greenPrimary}>Active</Tag> : <Tag fontColor={BlackColors.white} bgColor={Colors.redPrimary}>Not Active</Tag>}
          </Container>
          <div>
            <Tag fontColor={Colors.primary} bgColor={Colors.lightest}>{project.projectFileNumber}</Tag>
          </div>
        </Container>
        <Container
            display={"flex"}
            justify={"center"}
            align={"center"}
            style={{ flexGrow: '1' }}>
            <Container display={"flex"} align={"center"} justify={"center"} bRadius={"5px"} width={"2.5em"} height={"2.5em"} border={BlackColors.divider} >
              {project.style.logoUrl ? <Logo src={project.style.logoUrl} width={"3rem"}></Logo> : <H2>{project.projectName.slice(0, 1).toUpperCase()}</H2>}
            </Container>
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
    <>
      <Container>
        <H2>Active Projects</H2>
        <Divider />
        <Grid>{renderActiveProjects()}</Grid>
      </Container>
      <Container>
        <H2>Inactive Projects</H2>
        <Divider />
        <Grid>{renderInactiveProjects()}</Grid>
      </Container>
    </>
  );
}
