import Home from "./components/pages/Home"
import QuemSomos from "./components/pages/QuemSomos"
import Page404 from "./components/pages/Page404"
import Contato from "./components/pages/Contato"
import Cardapio from "./components/pages/Cardapio"
import {Routes, Route} from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/cardapio" element={<Cardapio />} />
    </Routes>
  )
}

export default App