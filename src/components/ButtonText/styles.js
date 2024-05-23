import styled from "styled-components";

export const Container = styled.a`
    width: fit-content;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.COLORS.PINK};
`;