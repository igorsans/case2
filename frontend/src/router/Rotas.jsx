import { Routes, Route } from "react-router-dom";
import Usuarios from "../pages/Usuarios/Usuarios";
import CadastrarUsuarios from "../pages/CadastrarUsuarios/CadastrarUsuarios"

const Rotas = () => {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/usuarios/cadastro" element={<CadastrarUsuarios/>} />
    </Routes>
  );
};

export default Rotas;
