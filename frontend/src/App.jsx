
import { getUsuarios } from "./api/usuariosApi"
import Header from "./components/Header/Header"
import Rotas from "./router/Rotas"

function App() {

  return (
    <div>
      <Header/>
      <Rotas/>
    </div>
  )
}

export default App
