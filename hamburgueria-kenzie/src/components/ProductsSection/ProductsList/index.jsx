import { ProductsCard } from "../ProductsCard/index.jsx";
import { StyledSection } from "./index.js";

export const ProductList = ({ toast, products, cartProducts, setCartProducts, inputSearch }) => {

    const add = (id) => {
        if (cartProducts.length > 0) {
            const verification = cartProducts.find(product => product.id === id)
            if (verification !== undefined) {
                toast.error("Produto já está adicionado no carrinho!")
            }
            else {
                const findProduct = products.find(product => id === product.id)
                setCartProducts([...cartProducts, findProduct])
                toast.success("Producto adicionado no carrinho!")
            }
        }
        else {
            const findProduct = products.find(product => id === product.id)
            setCartProducts([...cartProducts, findProduct])
            toast.success("Producto adicionado no carrinho!")
        }
    }

    return (
        <StyledSection>
            <ul>
                {products.map(product => {
                    if (inputSearch !== "") {
                        if (product.name.toUpperCase().includes(inputSearch.toUpperCase())) {
                            return <ProductsCard key={product.id} product={product} add={(add)} />
                        }
                    }
                    else { return <ProductsCard key={product.id} product={product} add={(add)} /> }
                })}
            </ul>
        </StyledSection>
    )
}