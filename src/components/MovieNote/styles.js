import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 222px;

    display: flex;
    flex-direction: column;

    padding: 32px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius: 16px;

    > h3 { 
        color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
        font-size: 24px;
        font-weight: bold;
        font-family: 'Roboto Slab';
        margin-bottom: 8px;
    }

    > p {
        max-width: 1057px;
        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        margin-top: 10px;
        margin-bottom: 15px;

    }

`;
