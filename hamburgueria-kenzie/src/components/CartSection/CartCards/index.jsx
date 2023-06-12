import { Title } from "../../../styles/TipografyStyles/Title.js"
import { StyledCard } from "./index.js"
import IconTrash from "../../../assets/IconTrash.svg"

export const CartCards = ({ product, remove, }) => {

    return (
        <StyledCard>
            <div className="card__content">
                <figure>
                    <img src={product.img} alt="Icone do produto" className="card__img" />
                </figure>
                <Title>{product.name}</Title>
            </div>
            <img src={IconTrash} alt="Ícone de Lixeira" onClick={() => remove(product.id)} />
        </StyledCard>
    )
}