import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Button } from "../UserInterface/Button";
import { Container, Form, Input } from "../UserInterface/MainComp";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../services";
import { Modal } from "@material-ui/core";
import { BlackColors, ColorPickerColors, Colors } from "../UserInterface/Styles";
import { H2, H4 } from "../UserInterface/Headings";
import { CirclePicker } from "react-color";
import { StyledExit } from "../UserInterface/LinkStyle";
import { getProjects } from "../../services";
import { IoAdd } from "react-icons/io5";

const animatedComponents = makeAnimated();


export function TaskForm({ getTasks }) {

    const [projectName, setProjectName] = useState("");
    const [projectFileNumber, setProjectFileNumber] = useState("");
    const [userSelect, setUserSelect] = useState({})
    const [selectedUser, setSelectedUser] = useState([])
    const [postSelectedUsers, setPostSelectedUsers] = useState([])
    const [selectedColor, setSelectedColor] = useState("#CCC");
    const [logoUrl, setLogoUrl] = useState("")
    const [open, setOpen] = useState(false);


    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    async function projectUsers() {
        const projectUsers = []
        await projectUsers.push(user._id)
        await selectedUser.forEach((user) => {
            return projectUsers.push(user.userId)
        })
        setPostSelectedUsers(projectUsers)
    }

    async function putUsersInSelect() {
        if (users) {
            setUserSelect(
                await users.map((user) => ({
                    label: `${user.firstName} ${user.lastName}`,
                    value: `${user.firstName} ${user.lastName}`,
                    userId: `${user._id}`
                }))
            )
        }
    }
    useEffect(() => projectUsers(), [selectedUser])
    useEffect(() => putUsersInSelect(), [users])


    async function saveProject(e) {
        e.preventDefault();
        try {
            const projectData = {
                projectName: projectName,
                projectFileNumber: projectFileNumber,
                author: user._id,
                userIds: postSelectedUsers,
                style: {
                    shadowColor: selectedColor,
                    logoUrl: logoUrl
                }
            };
            await axios.post("http://localhost:5000/projects/", projectData);
            dispatch(getProjects())
            setOpen(false);
            setProjectName("");
            setProjectFileNumber("");
            setSelectedColor("#0000");
            setLogoUrl("");

        } catch (err) {
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Button onClick={handleOpen} style={{display:"flex"}}>
                <IoAdd style={{fontSize: "1rem", color: BlackColors.gray, marginRight:"0.2rem"} }/>
                Create New Project
            </Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <Container display={"flex"} justify={"center"}>
                    <Container bgColor={BlackColors.white} bRadius={"10px"} padding={"1em"} width={"50vw"} style={{ marginTop: "6em" }}>
                        <Container display={"flex"} justify={"space-between"}>
                            <H2 bold>Create a new Project</H2>
                            <StyledExit onClick={handleClose} />
                        </Container>
                        <Form onSubmit={saveProject}>
                            <Container display={"grid"} gridTemplateColumns={"1fr 1fr"} >
                                <Container>
                                    <H4 fontColor={BlackColors.gray} margin> Enter Project Name</H4>
                                    <Input
                                        type="text"
                                        placeholder="Project  Name"
                                        onChange={(e) => {
                                            setProjectName(e.target.value);
                                        }}
                                        value={projectName}
                                    />
                                </Container>
                                <Container style={{ marginLeft: "1em" }}>
                                    <H4 fontColor={BlackColors.gray} margin> Enter Project File Number</H4>
                                    <Input
                                        type="text"
                                        placeholder="Project Number"
                                        onChange={(e) => {
                                            setProjectFileNumber(e.target.value);
                                        }}
                                        value={projectFileNumber}
                                    />
                                </Container>
                            </Container>
                            <Container>
                                <H4 fontColor={BlackColors.gray} margin> Select Project Team Members</H4>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    options={userSelect}
                                    onChange={setSelectedUser}
                                >
                                </Select>
                            </Container>
                            <Container display={"grid"} gridTemplateColumns={"1fr 1fr"} >
                                <Container>
                                    <H4 fontColor={BlackColors.gray} margin> Select Project Color Pallet</H4>
                                    <CirclePicker
                                        color={selectedColor}
                                        onChangeComplete={color => setSelectedColor(color.hex)}
                                        colors={ColorPickerColors}
                                        circleSize={22}
                                    />
                                </Container>
                                <Container style={{ marginLeft: "1em" }}>
                                    <H4 fontColor={BlackColors.gray} margin> Enter logo url (optional)</H4>
                                    <Input
                                        type="text"
                                        placeholder="URL"
                                        onChange={(e) => {
                                            setLogoUrl(e.target.value);
                                        }}
                                        value={logoUrl}
                                    />
                                </Container>
                            </Container>
                            <Container style={{ marginTop: "1em" }}>
                            </Container>
                            <Button primary type="submit"> Create a new Project</Button>
                        </Form>
                    </Container>
                </Container>

            </Modal>

        </Container>
    );
}

