import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Footer from "../layout/Footer"

const Contato = () => {
    return (
         <>
        <Header />
        <div id="main">
            <Sidebar />
           <h1>Contato</h1>
           <p>Entre em contato conosco!</p>
        </div>
        <Footer />
    </>
    )
}

export default Contato