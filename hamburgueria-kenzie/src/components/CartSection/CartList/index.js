import { styled } from "styled-components"

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);

    .modal__container {
        position: relative;
        width: 100%;
        max-width: 500px;
        margin: 0 15px;
        background-color: white;
        border-radius: 5px 5px 5px 5px;
    }

    .modal__header{
        background-color: var(--color-primary);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px 5px 0px 0px;
    }

    .modal__header button{
        background-color: transparent;
        border: none;
        color: var(--color-grey-100);
        font-size: 16px;
    }

    .modal__list{
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .grey-0{
        color: var(--color-grey-0);
    }

    .grey-300{
        color: var(--color-grey-300);
    }

    .grey-600{
        color: var(--color-grey-600);
    }

`