import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        outline: none;
    }  

    a {
        text-decoration: none;
        font-family: 'Roboto Slab';
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-family: "Roboto Slab", serif;
    }
    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_SUB};
        font-family: "Roboto Slab", serif;
    }
    p {
        color: ${({ theme }) => theme.COLORS.WHITE_TXT};
    }

`;