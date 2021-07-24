import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ProjectsList } from '../components/ProjectsList';
import { Container } from '../components/UserInterface/MainComp';
import { ProjectForm } from '../components/ProjectForm';
import { Button } from '../components/UserInterface/Button';
import { getProjects } from "../services";

import { useSelector, useDispatch } from "react-redux";


export function Projects() {
    const dispatch = useDispatch();
 
    useEffect(() => {
      dispatch(getProjects())
    }, [])


      const { projects } = useSelector((state) => state.projects);

    console.log(projects)

    // const {projects} = useSelector((state) => state.project)

    

    // const {projects} = useSelector((state)=> state.project)
    
    // console.log(projects)


    // const [project, setProject] = useState([]);

    // async function getProjects() {
    //     const projectRes = await axios.get("http://localhost:5000/projects", {
    //         responseType: 'json'
    //     })
    //     setProject(projectRes.data);
    // }

    // useEffect(() => {
    //     getProjects();
    // }, []);

    
    return (
        <div>
            <h1>All Projects</h1>
            <ProjectForm getProjects={getProjects} />
            <Container>
                {/* <Button onClick={}>New Project</Button> */}
                {/* <SketchPicker/> */}
            <ProjectsList projects={projects} />
            </Container>
            </div>
    )

}