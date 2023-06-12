import { styled } from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: start;

    .card__content{
        display: flex;
        align-items: start;
    }

    .card__content h2{
        padding: 10px 20px;
    }

    figure{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        background-color: var(--color-grey-0);
        border-radius: 6px;
    }

    .card__img{
        width: 55px;
        height: 55px;
    }

    img{
        width: 14px;
        height: 14px;
        margin: 10px 0;
        cursor: pointer;
    }


`