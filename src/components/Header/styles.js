import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #3E3B47;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 0 120px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: normal;
        text-align: end;

        span {
            color: white;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Roboto Slab';
        }

        p {
            font-size: 14px;
            font-weight: 400;
        }
    }
`;

export const Search = styled.div`
    width: 630px;
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
`