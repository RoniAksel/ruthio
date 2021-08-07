import React from 'react';
import { H1, H2, H4 } from '../UserInterface/Headings';
import { Container, Divider } from '../UserInterface/MainComp';
import { Colors, BlackColors } from '../UserInterface/Styles';
import { AvatarGroup } from "@material-ui/lab";
import { Tooltip, Avatar } from "@material-ui/core";
import { FaEllipsisV } from 'react-icons/fa';



export function TaskTitleHeader({ task }) {
    console.log(task)
    return (
        <>
            {task &&
                <H2 bold>
                    {task.title}
                </H2>
            }

        </>
    );
}
