import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="lista">
            <li><Link to ={"/usuarios"}>Usuarios</Link></li>
            <li><Link to ={"/usuarios/cadastro"}>Cadastro</Link></li>
            <li><Link to ={"/usuarios/deletar"}>Deletar</Link></li>
            <li><Link to ={"/usuarios/atualizar"}>Atualizar</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
