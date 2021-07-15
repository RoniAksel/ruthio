import React from "react";
import { Card, Grid, Tag, H4,H2, FlexJustify, AvatarParent, SpanSmall } from "./UserInterface/MainComp";
import { Tooltip, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";



export function ProjectsList({ projects }) {

  const data = [{
    style: {
      style1: "1"
    },
  },
  {
    style: {
      style1: "2"
    },
  },
  
  ]

console.log(data.forEach((one)=> console.log(one.style.style1)))

  function renderProjects() {
    return projects.map(project => {
      return <Card shadowColor={project.shadowColor}>
        {/* {console.log(project.shadowColor.style.forEach((style)=> console.log(style)))} */}
        <FlexJustify justify={"flex-end"}>
          <div>
            <span>File Number:</span><Tag fontColor={"#779BFE"} bgColor={"#EEF3FF"}>{project.projectFileNumber}</Tag>
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

