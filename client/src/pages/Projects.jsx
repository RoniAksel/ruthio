import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ProjectsList } from '../components/ProjectsList';
import { Container } from '../components/UserInterface/MainComp';
import { ProjectForm } from '../components/ProjectForm';
import { Button } from '../components/UserInterface/Button';
import { getProjects } from "../services";
import { Colors } from '../components/UserInterface/Styles';
import { useSelector, useDispatch } from "react-redux";
import { H1, H4 } from '../components/UserInterface/Headings';
import {AiOutlineInfoCircle} from 'react-icons/ai'

export function Projects() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProjects())
  }, [])


  return (
    <Container margin={"1rem"}>
      <H1 bold>All Projects</H1>
      {projects.length < 0 ?
        <Container style={{marginTop:"1rem"} } bgColor={Colors.lightest} padding={"1rem"} bRadius={"10px"} border={Colors.light}>
          {user &&
            <Container display={"flex"} align={"center"}>
            <AiOutlineInfoCircle style={{color: Colors.primary}} />
            <H4 style={{marginLeft: "0.25rem"}}fontColor={Colors.primary}>  Hi <strong>{user.firstName} {user.lastName}</strong> you currently have no project which you are a part of</H4>
            </Container>
          
          }
        </Container>
        :
        <Container style={{marginTop:"1rem"} } bgColor={Colors.lightest} padding={"1rem"} bRadius={"10px"} border={Colors.light}>
          {user &&
            <Container display={"flex"} align={"center"}>
            <AiOutlineInfoCircle style={{color: Colors.primary}} />
            <H4 style={{ marginLeft: "0.25rem" }} fontColor={Colors.primary}>  Hi <strong>{user.firstName} {user.lastName}</strong> you currently have {projects.length > 1 ? <span> <strong>{ projects.length}</strong> open projects</span> : <span><strong>{ projects.length}</strong> open project</span> } </H4>
            </Container>
          
          }
        </Container>      
      }
      <ProjectForm getProjects={getProjects} />
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </Container>
  )

}