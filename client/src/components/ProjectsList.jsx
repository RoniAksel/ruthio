import React, { useEffect, useState } from "react";
import { Card, Grid, Tag, H4,H2, FlexJustify, AvatarParent, SpanSmall } from "./UserInterface/MainComp";
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";



export function ProjectsList({ projects }) {

  // const { projects } = useSelector((state) => state.project);


  function renderProjects() {
    return projects.map(project => {
      return <Card shadowColor={project.style.shadowColor}>
        <FlexJustify justify={"flex-end"}>
          <div>
            <span>File Number:</span><Tag fontColor={project.style.shadowColor} bgColor={project.style.fileTagColor}>{project.projectFileNumber}</Tag>
          </div>
        </FlexJustify>
        <H2 txtAlign={"center"}>{project.projectName}</H2>
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


  return (
    <Grid>{renderProjects()}</Grid>
  );
}

