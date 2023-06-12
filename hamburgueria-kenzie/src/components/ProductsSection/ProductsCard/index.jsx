import { StyledProductsCard } from "."
import { ButtonMedium } from "../../../styles/ButtonsStyles/ButtonMedium"
import { Paragraph } from "../../../styles/TipografyStyles/Paragraph.js"
import { Span } from "../../../styles/TipografyStyles/Span"
import { Title } from "../../../styles/TipografyStyles/Title"

export const ProductsCard = ({ product, add }) => {
    return (
        <StyledProductsCard>
            <figure>
                <img src={product.img} alt="ícone do produto" />
            </figure>
            <div>
                <Title>{product.name}</Title>
                <Span>{product.category}</Span>
                <Paragraph>R$ {product.price.toFixed(2)}</Paragraph>
                <ButtonMedium type="button" onClick={() => add(product.id)}>Adicionar</ButtonMedium>
            </div>
        </StyledProductsCard>
    )
}