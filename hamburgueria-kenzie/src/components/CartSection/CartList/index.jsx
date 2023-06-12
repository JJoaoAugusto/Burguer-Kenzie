import { StyledModal } from "./index.js"
import { CartCards } from "../CartCards/index.jsx"
import { useEffect, useRef } from "react"
import { Title } from "../../../styles/TipografyStyles/Title.js"
import { CartCount } from "../CartCount/index.jsx"

export const CartList = ({ toast, openModal, setOpenModal, cartProducts, setCartProducts }) => {

    const modalRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleOutClick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setOpenModal(false)
            }
        }
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpenModal(false)
            }
        }
        window.addEventListener("mousedown", handleOutClick)
        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("mousedown", handleOutClick)
            window.removeEventListener("keydown", handleKeyDown)

        }
    }, [])

    const remove = (id) => {
        const newCartList = cartProducts.filter(product => id !== product.id)
        setCartProducts([...newCartList])
        toast.info("Produto removido do carrinho")
    }

    if (openModal) {
        return (
            <StyledModal>
                <div ref={modalRef} className="modal__container" role="dialog">
                    <div className="modal__header">
                        <Title className="grey-0">Carrinho de Compras</Title>
                        <button ref={buttonRef} type="button" onClick={() => setOpenModal(false)}>X</button>
                    </div>
                    <ul className="modal__list">
                        {cartProducts.map(product => <CartCards key={product.id} product={product} remove={remove} />)}
                    </ul>
                    <CartCount toast={toast} cartProducts={cartProducts} setCartProducts={setCartProducts} />
                </div>
            </StyledModal>
        )
    }
}