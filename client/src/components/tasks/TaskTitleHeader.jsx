import React from 'react';
import { H2 } from '../UserInterface/Headings';



export function TaskTitleHeader({ task }) {
    return (
        <>
            {task &&
                <H2 bold style={{marginLeft:"1rem"}}>
                    {task.title}
                </H2>
            }

        </>
    );
}
