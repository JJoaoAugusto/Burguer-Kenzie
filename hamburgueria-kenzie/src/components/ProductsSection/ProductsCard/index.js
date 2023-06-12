import { styled } from "styled-components";

export const StyledProductsCard = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    min-width: 300px;
    border: 2px solid var(--color-grey-0);
    border-radius: 5px;
    
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
    }

    figure{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-grey-0)
    }

    figure 
    
    img{
        width: 170px;
        height: 170px;
    }

    button:hover{
        background-color: var(--color-primary);
    }
`