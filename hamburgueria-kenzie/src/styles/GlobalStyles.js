import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

    :root{
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;
    }

    body, html{
        width: 100%;
        height: 100vh;
    }

    ul, ol{
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }

    .grey-0{
        color: var(--color-grey-0);
    }

    .grey-100{
        color: var(--color-grey-100);
    }

    .grey-300{
        color: var(--color-grey-300);
    }

    .grey-600{
        color: var(--color-grey-600);
    }
`