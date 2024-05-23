import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    overflow: hidden;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        margin: 50px 200px;
        white-space: nowrap;

        > div {
            display: flex;
            align-items: center;

            > h2 {
                font-size: 32px;
                font-weight: 400;
                margin-right: 700px;
            }
        }

        > section {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 37px;
            max-height: 450px;

            overflow-y: auto;


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
    }
`;