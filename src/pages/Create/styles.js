import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main {
        margin: 40px 123px;
        overflow-y: auto;
        max-height: 600px;

        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 8px;
        }
    }
`;

export const Form = styled.form`
        max-width: 1137px;
        margin: 0 auto;

        > header {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 40px;

            > h1 {
                color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
            }
        }

        > div {
            display: flex;
            flex-direction: row;
            gap: 40px;
            margin-bottom: 40px;
        }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 30px;

    > h4 {
        color: ${({ theme }) => theme.COLORS.WHITE_TXT};
        font-size: 20px;
        font-family: 'Roboto Slab';
        font-weight: 400;
    }

    > div {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        border-radius: 8px;

        display: flex;
        flex-direction: row;
        gap: 24px;
    }
`;