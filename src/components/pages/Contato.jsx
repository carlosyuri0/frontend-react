import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"

const Contato = () => {
    return <>
        <Header />
        <div id="main">
            <Sidebar />
           <h1>Contato</h1>
           <Content />
        </div>
        <Footer />
    </>
}

export default Contato