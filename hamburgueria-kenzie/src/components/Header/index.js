import { styled } from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    background-color: var(--color-grey-0);

    .header__container{
        width: 1400px;
        max-width: 100%;
        gap: 20px;
        display: flex;
        justify-content: space-between;
    }

    .header__content{
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content__logo{
        width: 150px;
        height: 35px;
    }

    .content__cart{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    .header__nav{
        width: 100%;
        max-width: 500px;
        display: flex;
        align-items: center;
    }

    .header__nav form{
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border: 2px solid var(--color-grey-100);
        border-radius: 8px;
    }

    .header__nav form:focus-within{
        border: 2px solid var(--color-grey-600);
    }

    form input{
        border: none;
        background-color: transparent;
        width: 80%;
    }

    form button{
        border: none;
        background-color: transparent;
    }

    @media(max-width: 768px){
        .header__container{
            flex-direction: column;
        }
        .header__nav{
            min-width: 100%;
        }
    }
`