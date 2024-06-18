import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content"
    ;

    > main {
        max-width: 1113px;
    width: 100%;
    margin: 40px 185px;
    display: flex;
    flex-direction: column;
    gap: 24px;

        > #createdBy {
            img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }

            display: flex;
            gap: 8px;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.WHITE_TAG};
            margin-bottom: 16px;
        }

        > #tags {
            margin-bottom: 16px;
        }

        > #description {
            color: ${({ theme }) => theme.COLORS.WHITE_TAG};
            max-width: 1113px;
            text-align: justify;
        }
        > div {
            display: flex;
            flex-direction: row;
            gap: 40px;
            margin-bottom: 40px;
        }
    }
`;