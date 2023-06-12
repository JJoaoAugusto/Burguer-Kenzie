import { StyledHeader } from "./index.js"
import IconBurguerKenzie from "../../assets/IconBurguerKenzie.svg"
import IconCart from "../../assets/IconCart.svg"
import IconSearch from "../../assets/IconSearch.svg"

export const Header = ({ setInputSearch, setOpenModal }) => {
    let search = ""
    const handleSubmit = (event) => {
        event.preventDefault()
        setInputSearch(search)
    }

    return (
        <>
            <StyledHeader>
                <div className="header__container">
                    <div className="header__content">
                        <img src={IconBurguerKenzie} alt="Icone da Página" className="content__logo" />
                        <img onClick={() => setOpenModal(true)} src={IconCart} alt="Icone de Carrinho" className="content__cart" />
                    </div>
                    <nav className="header__nav">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => search = event.target.value} />
                            <button type="submit"> <img src={IconSearch} alt="Icone de Lupa para pesquisa" /> </button>
                        </form>
                    </nav>
                </div>

            </StyledHeader>
        </>
    )
}