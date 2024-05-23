import styled from "styled-components";
import background from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;

    > h1 {
        font-size: 48px;
    }

    > p {
        font-size: 14px;
        margin-bottom: 48px;
    }

    > h2 {
        font-size: 24px;

        margin-bottom: 48px;
    }

    > a {
        align-self: center;
        margin-top: 42px;

        text-decoration: none;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`;