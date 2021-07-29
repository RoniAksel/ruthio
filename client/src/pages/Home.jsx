import axios from 'axios';
import { Card, Container, Divider } from '../components/UserInterface/MainComp';
import { BlackColors, Colors } from '../components/UserInterface/Styles';
import { useSelector, useDispatch } from "react-redux";
import { H1, H4, H2 } from '../components/UserInterface/Headings';
import { GrProjects, GrTask } from "react-icons/gr";
import { IconContext } from 'react-icons/lib';
import { useEffect } from 'react';
import { getProjects, getTasks } from "../services";

export function Home() {
    const dispatch = useDispatch();

    const { projects } = useSelector((state) => state.projects);
    const { user } = useSelector((state) => state.user);
    const { tasks } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(getProjects())
    }, []);
    
    useEffect(() => {
        dispatch(getTasks())
    },[]);


    console.log(user)
    console.log(projects)
    console.log(tasks)


    return (
        <Container padding={"1em"}>
            <H1 bold>Welcome {user.firstName}</H1>
            <H2 bold fontColor={Colors.primary}>Status</H2>
            <Divider/>
            <Container display={"flex"} justify={"space-between"}>
                <Container style={{ minWidth: "255px" }} bRadius={"10px"} padding={"1.25em"} bgColor={BlackColors.white} display={'grid'} gridTemplateColumns={"1fr 2fr"}>
                    <Container>
                        <GrProjects color={"blue"} style={{ fontSize: "2rem" }} />
                    </Container>
                    <Container>
                        <H4 bold fontColor={Colors.primary}>Open Projects</H4>
                        <H2>{projects.length}</H2>
                    </Container>
                </Container>
                <Container style={{ minWidth: "255px" }} bRadius={"10px"} padding={"1.25em"} bgColor={BlackColors.white} display={'grid'} gridTemplateColumns={"1fr 2fr"}>
                    <Container>
                        <GrTask color={"blue"} style={{ fontSize: "2rem" }} />
                    </Container>
                    <Container>
                        <H4 bold fontColor={Colors.redPrimary}>Open Tasks</H4>
                        <H2>{tasks.length}</H2>
                    </Container>
                </Container>
                <Container style={{ minWidth: "255px" }} bRadius={"10px"} padding={"1.25em"} bgColor={BlackColors.white} display={'grid'} gridTemplateColumns={"1fr 2fr"}>
                    <Container>
                        <IconContext.Provider
                            value={{ color: 'white', size: '48px' }}
                        >
                            <GrProjects />
                            </IconContext.Provider>
                  </Container>
                        <Container>
                            <H4 bold fontColor={Colors.greenPrimary}>Open Projects</H4>
                            <H2>{projects.length}</H2>
                        </Container>
                    </Container>

                </Container>
            </Container>
            )

}