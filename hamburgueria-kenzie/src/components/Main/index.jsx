import { CartList } from "../CartSection/CartList/index.jsx"
import { ProductList } from "../ProductsSection/ProductsList/index.jsx"
import { StyledMain } from "./index.js"

export const Main = ({ toast, products, cartProducts, setCartProducts, inputSearch, openModal, setOpenModal }) => {
    return (
        <StyledMain>
            <ProductList toast={toast} products={products} cartProducts={cartProducts} setCartProducts={setCartProducts} inputSearch={inputSearch} />
            <CartList toast={toast} openModal={openModal} setOpenModal={setOpenModal} cartProducts={cartProducts} setCartProducts={setCartProducts} />
        </StyledMain>
    )
}