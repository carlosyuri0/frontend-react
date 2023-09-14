import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'
import Content from '../layout/Content'

const Cardapio = () => {
  return <>
     <Header />
    <div id="main">
        <Sidebar />
        <Content>
        <h1>Cardápio</h1>
        </Content>
    </div>
    <Footer />
</>

}

export default Cardapio