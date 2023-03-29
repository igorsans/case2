import { Routes, Route } from "react-router-dom";
import Usuarios from "../pages/Usuarios/Usuarios";
import CadastrarUsuarios from "../pages/CadastrarUsuarios/CadastrarUsuarios"
import DeletarUsuarios from "../pages/DeletarUsuarios/DeletarUsuarios";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/usuarios/cadastro" element={<CadastrarUsuarios/>} />
      <Route path="/usuarios/deletar" element={<DeletarUsuarios/>} />
    </Routes>
  );
};

export default Rotas;
