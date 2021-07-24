import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from '../components/UserInterface/MainComp';
import { getTasks } from "../services";
import { BlackColors, Colors } from '../components/UserInterface/Styles';
import { useSelector, useDispatch } from "react-redux";
import { H1, H4 } from '../components/UserInterface/Headings';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export function Tasks() {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasks);
    const { user } = useSelector((state) => state.user);
    const { quill, quillRef } = useQuill();
    const [savedText, setSavedText] = useState("");

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                // console.log(delta);
                console.log(quill.root.innerHTML);
                setSavedText(quill.root.innerHTML);
            });
        }
    }, [quill, savedText]);

    return (
        <Container padding={"1rem"} display={"grid"} style={{ gridGap: "1em" }}>
            {tasks.map((task) => {
                return (
                    <Container padding={"1rem"} bgColor={BlackColors.white} bRadius={"10px"}>
                        <H4>{task.taskTitle}</H4>
                        <div dangerouslySetInnerHTML={{ __html: task.text }}></div>
                        <H4>Instructed By: {task.author.firstName} {task.author.lastName}</H4>
                        <p>
                            Task Members:
                            {task.userIds.map((user) => {
                                return (
                                    <div>
                                        {user.firstName}
                                    </div>
                                )
                            })}
                        </p>
                    </Container>
                )
            })}
            <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} value={quill} />

                <div dangerouslySetInnerHTML={{ __html: savedText }}></div>
            </div>
        </Container>
    )

}