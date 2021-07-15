import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { CirclePicker } from 'react-color'

const animatedComponents = makeAnimated();

export function ProjectForm({ getProjects }) {
    const [projectName, setProjectName] = useState("")
    const [projectFileNumber, setProjectFileNumber] = useState("")
    const [userSelect, setUserSelect] = useState()
    const { user } = useContext(AuthContext);
    const { allUsers } = useContext(AuthContext);
    const [selectedUser, setSelectedUser] = useState([])
    const [postSelectedUsers, setPostSelectedUsers] = useState([])
    const [color, setColor] = useState("")
    async function projectUsers() {
        const projectUsers = []
        await projectUsers.push(user._id)
        await selectedUser.forEach((user) => {
            return projectUsers.push(user.userId)
        })
        setPostSelectedUsers(projectUsers)
    }

    useEffect(() => projectUsers(), [selectedUser])


    async function putUsersInSelect() {
        await setUserSelect(
            await allUsers.map((user) => ({
                label: `${user.firstName} ${user.lastName}`,
                value: `${user.firstName} ${user.lastName}`,
                userId: `${user._id}`
            }))
        )
    }
    useEffect(() => putUsersInSelect(), [])

    async function saveProject(e) {
        e.preventDefault();
        try {
            const projectData = {
                projectName: projectName,
                projectFileNumber: projectFileNumber,
                author: user._id,
                userIds:  postSelectedUsers,
                style: {
                    shadowColor: "blue"
                }

            };
            await axios.post("http://localhost:5000/projects/", projectData);
            getProjects();
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <form onSubmit={saveProject}>
                <input
                    type="text"
                    placeholder="Project  Name"
                    onChange={(e) => {
                        setProjectName(e.target.value);
                    }}
                    value={projectName}
                />
                <input
                    type="text"
                    placeholder="Project Number"
                    onChange={(e) => {
                        setProjectFileNumber(e.target.value);
                    }}
                    value={projectFileNumber}
                />
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={userSelect}
                    onChange={setSelectedUser}
                >
                </Select>
                {/* <CirclePicker

                /> */}

                <button type="submit">Save new customer</button>
            </form>
        </div>
    );
}

