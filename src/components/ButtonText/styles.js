import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: fit-content;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.COLORS.PINK};
`;