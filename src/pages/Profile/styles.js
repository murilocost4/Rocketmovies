import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        display: flex;
        align-items: center;

        padding: 0 144px;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin:auto;

    > div:nth-child(4) {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
display: flex;
justify-content: center;
    position: relative;
    margin: -84px auto 32px;
    

    > img {
        border-radius: 50%;

        width: 186px;
        height: 186px;

    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 80px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_900}
        }

    }

`;