import React from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container } from '../UserInterface/MainComp';
import { Colors } from '../UserInterface/Styles';
import { FaCheck } from 'react-icons/fa';


export function TaskStatusHeader({ task }) {
    return (
        <>
            {task &&
                <Container display={"flex"} style={{ marginLeft: "1rem" }}>
                <Container border={Colors.light} bgColor={Colors.lightest} height={"3rem"} width={"3rem"} display={"flex"} justify={"center"} align={"center"}>
                    <FaCheck style={{color:Colors.primary, fontSize: "1.4rem"}}/>
                </Container>
                <Container style={{marginLeft:"0.5rem", alignSelf:"center"}}>
                    <H4 bold>Status</H4>
                    {task.active === true ? <H4 fontColor={Colors.greenPrimary}>Active</H4> : <H4 fontColor={Colors.primary}>Completed</H4> }

                </Container>
                </Container>

            }

        </>
    );
}
