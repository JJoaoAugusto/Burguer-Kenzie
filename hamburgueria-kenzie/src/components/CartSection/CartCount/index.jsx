import { StyledDiv } from "."
import { ButtonDefault } from "../../../styles/ButtonsStyles/ButtonDefault"
import { Paragraph } from "../../../styles/TipografyStyles/Paragraph"

export const CartCount = ({ toast, cartProducts, setCartProducts, }) => {

    const count = () => {
        let result = 0
        if (cartProducts.length === 1) {
            result = cartProducts[0].price
        }
        else if (cartProducts.length > 1) {
            result = cartProducts.reduce((acc, act) => acc + Number(act.price), 0)
        }
        return result.toFixed(2)
    }

    const removeAll = () => {
        setCartProducts([])
        toast.info("Todos os Itens foram removidos!")
    }

    return (
        <StyledDiv>
            <div>
                <Paragraph className="grey-600">Total</Paragraph>
                <Paragraph className="grey-300">R$ {count()}</Paragraph>
            </div>
            <ButtonDefault type="button" onClick={() => removeAll()}>Remover Todos</ButtonDefault>
        </StyledDiv>
    )
}