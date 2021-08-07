import React from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container } from '../UserInterface/MainComp';
import { Colors } from '../UserInterface/Styles';
import { FaCheck } from 'react-icons/fa';


export function TaskStatusHeader({ task }) {
    return (
        <>
            {task &&
                <Container style={{ marginLeft: "1rem" }}>
                <Container border={Colors.light} bgColor={Colors.lightest} height={"3rem"} width={"3rem"}>
                <FaCheck/>
                </Container>
                <Container>
                    <H4 bold>Status</H4>
                    
                </Container>
                </Container>

            }

        </>
    );
}
