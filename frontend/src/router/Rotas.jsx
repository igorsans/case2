import { Routes, Route } from "react-router-dom";
import Usuarios from "../pages/Usuarios/Usuarios";
import CadastrarUsuarios from "../pages/CadastrarUsuarios/CadastrarUsuarios"
import DeletarUsuarios from "../pages/DeletarUsuarios/DeletarUsuarios";
import AtualizarUsuarios from "../pages/AtualizarUsuarios/AtualizarUsuarios";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="/usuarios/cadastro" element={<CadastrarUsuarios/>} />
      <Route path="/usuarios/deletar" element={<DeletarUsuarios/>} />
      <Route path="/usuarios/atualizar" element={<AtualizarUsuarios/>} />
    </Routes>
  );
};

export default Rotas;
