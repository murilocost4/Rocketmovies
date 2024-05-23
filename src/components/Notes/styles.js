import styled from "styled-components";

export const Container = styled.button`
    width: 98%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border: none;
    border-radius: 16px;
    padding: 32px;

    > h3 {
        flex: 1;
        text-align: left;
        font-weight: bold;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
    }

    > p {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 30px;
        gap: 8px;
    }
`;