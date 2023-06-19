import { styled } from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    max-width: 1400px;
    ul{
        width: 100%;
        max-width: 1400px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
        padding: 30px;
    }

    ul li:hover{
        border-color: var(--color-primary);
    }

    @media(max-width: 1380px){
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    @media(max-width: 700px){
        ul{
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
        }
    }
`