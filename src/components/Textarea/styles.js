import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE_TXT};

    margin-bottom: 8px;
    border-radius: 10px;

    > textarea {
        height: 274px;
        width: 100%;

        padding: 12px;

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