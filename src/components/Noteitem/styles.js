import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_100};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.WHITE_TXT : theme.COLORS.WHITE_TAG};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.WHITE_TXT}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    > input {
        height: 56px;
        width: 100%;

        padding-left: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE_TAG};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE_TXT}
        }

    }

    > button {
        color: ${({ theme }) => theme.COLORS.PINK};
        > svg {
            width: 22px;
            height: 22px;
        }
    }

`;