import { useState, useEffect } from "react"
import { Header } from "./components/Header/index.jsx"
import { api } from "./services/api/index.jsx"
import GlobalStyles from "./styles/GlobalStyles.js"
import { Main } from "./components/Main/index.jsx"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const [cartProducts, setCartProducts] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get()
      setProducts(data)
    }
    loadData()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header setInputSearch={setInputSearch} openModal={openModal} setOpenModal={setOpenModal} />
      <Main toast={toast} products={products} cartProducts={cartProducts} setCartProducts={setCartProducts} inputSearch={inputSearch} openModal={openModal} setOpenModal={setOpenModal} />
      <ToastContainer />
    </>
  )
}

export default App
