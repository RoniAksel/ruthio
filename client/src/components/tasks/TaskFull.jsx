import React, { useState } from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container, AvatarParent, SpanSmall, Divider } from '../UserInterface/MainComp';
import { Colors, BlackColors } from '../UserInterface/Styles';
import { AvatarGroup } from "@material-ui/lab";
import { Tooltip, Avatar } from "@material-ui/core";
import { FiMoreHorizontal } from "react-icons/fi";
import { StyledExit } from '../UserInterface/LinkStyle';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { BsFileText } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";


export function TaskFull({ task, close }) {
    return (
        <>
            {task &&
                <Container bgColor={BlackColors.white} style={{ overflow: "hidden", height: "80vh" }}>
                    <Container
                        dangerouslySetInnerHTML={{ __html: task.text }}>
                    </Container>
                            <H4 bold>Comments</H4>
                    </Container>
            }

        </>
    );
}
