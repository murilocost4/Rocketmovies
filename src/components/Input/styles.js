import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE_TXT};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12PX;

        color: ${({ theme }) => theme.COLORS.WHITE_SUB};
        background: transparent;
        border: 0;

        &placeholder {
            color: ${({ theme }) => theme.COLORS.WHITE_TXT};
        }
    }

    >svg {
        margin-left: 16px;
    }
`;