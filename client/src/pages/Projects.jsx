import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ProjectsList } from '../components/ProjectsList';
import { Container } from '../components/UserInterface/MainComp';
import { ProjectForm } from '../components/ProjectForm';

export function Projects() {
    const [project, setProject] = useState([]);

    async function getProjects() {
        const projectRes = await axios.get("http://localhost:5000/projects", {
            responseType: 'json'
        })
        setProject(projectRes.data);
    }

    useEffect(() => {
        getProjects();
    }, []);

    
    return (
        <div>
            <h1>All Projects</h1>
            <ProjectForm getProjects={getProjects} />
            <Container>
                {/* <SketchPicker/> */}
            <ProjectsList projects={project} />
            </Container>
            </div>
    )

}