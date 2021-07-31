import { Link } from 'react-router-dom'
import styled from "styled-components/macro"
import { Colors, BlackColors } from './Styles'
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const StyledLinkNav = styled(Link)`
    text-decoration: none;
    color: ${BlackColors.primary};
    transition: 0.2s ease;
    &:hover{
        color:${Colors.primary};
        border-left: 0.75em solid ${Colors.primary}
    }
    &:active{
        color:${Colors.primary};
        text-decoration: none;
    }
    &:link{
        color:${Colors.primary};
        text-decoration: none;

    }
`

export const StyledLogOut = styled(FaSignOutAlt)`
    color: ${BlackColors.lighter};
    transition: 0.2s ease;
    margin: 0.25rem;
    font-size: 1.25em;
    &:hover{
        color: ${Colors.redPrimary};

}
`

export const StyledExit = styled(AiOutlineClose)`
    color: ${BlackColors.light};
    transition: 0.2s ease;
    font-size: 1.25em;
    &:hover{
        color: ${Colors.redPrimary};

}
`