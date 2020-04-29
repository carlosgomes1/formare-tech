import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body, input, button {
        font-size: 14px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
