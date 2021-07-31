import React, {  useEffect } from 'react'
import { ProjectsList } from '../components/ProjectsList';
import { Container } from '../components/UserInterface/MainComp';
import { ProjectForm } from '../components/ProjectForm';
import { getProjects } from "../services";
import { Colors } from '../components/UserInterface/Styles';
import { useSelector, useDispatch } from "react-redux";
import { H1, H4 } from '../components/UserInterface/Headings';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Select from 'react-select';
import { BlackColors } from '../components/UserInterface/Styles';

const options = [
  { value: 'ALL', label: 'All Projects' },
  { value: 'ACTIVE', label: 'Active Projects' },
  { value: 'INACTIVE', label: 'Completed Projects' }
];

const customStyles = {
  control: () => ({
    width: "100%",
    display: "flex",
  })
}

export function Projects() {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProjects())
  }, [])


  return (
    <Container margin={"1rem"}>
      <Container display={"flex"} justify={"space-between"}>
        <Container display={"flex"} align={"baseline"} style={{ flexGrow: 1 }}>
          <H1 bold>Projects</H1>
          <H4 fontColor={BlackColors.gray} style={{ marginLeft: "1em" }}>
            Show:
          </H4>
          <Container width={"20%"}>
            <Select
              styles={customStyles}
              options={options} />
          </Container>
        </Container>
        <Container display={"flex"} align={"flex-end"}>
          <H4 fontColor={BlackColors.gray} style={{ marginLeft: "1em" }}>Sort By</H4>
        </Container>
      </Container>
      {projects.length < 0 ?
        <Container style={{ marginTop: "1rem" }} bgColor={Colors.lightest} padding={"1rem"} bRadius={"10px"} border={Colors.light}>
          {user &&
            <Container display={"flex"} align={"center"}>
              <AiOutlineInfoCircle style={{ color: Colors.primary }} />
              <H4 style={{ marginLeft: "0.25rem" }} fontColor={Colors.primary}>  Hi <strong>{user.firstName} {user.lastName}</strong> you currently have no project which you are a part of</H4>
            </Container>

          }
        </Container>
        :
        <Container style={{ marginTop: "1rem" }} bgColor={Colors.lightest} padding={"1rem"} bRadius={"10px"} border={Colors.light}>
          {user &&
            <Container display={"flex"} align={"center"}>
              <AiOutlineInfoCircle style={{ color: Colors.primary }} />
              <H4 style={{ marginLeft: "0.25rem" }} fontColor={Colors.primary}>  Hi <strong>{user.firstName} {user.lastName}</strong> you currently have {projects.length > 1 ? <span> <strong>{projects.length}</strong> open projects</span> : <span><strong>{projects.length}</strong> open project</span>} </H4>
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