import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 25px;
    border-top: 2px solid var(--color-grey-100);

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button:hover{
        background-color: var(--color-grey-300);
        color: var(--color-grey-0);
    }
`
