import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme, isBlack }) => isBlack ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
    color: ${({ theme, isblack }) => isblack ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;