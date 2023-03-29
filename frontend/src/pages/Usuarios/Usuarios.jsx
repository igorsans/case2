import React, { useEffect, useState } from "react";
import { getUsuarios } from "../../api/usuariosApi";
import CardUsuarios from "../../components/CardUsuarios";
import "./Usuarios.css";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    async function handleRequisicao() {
      const response = await getUsuarios();
      setUsuarios(response);
    }
    handleRequisicao();
  }, []);
  return (
    <div className="pageUsuarios">
      <h1>Lista de Usuarios</h1>
      <div className="cardUsuarios">
        {usuarios ? usuarios.map((item) => (
              <CardUsuarios
                key={item.idusuarios}
                nome={item.nome}
                email={item.email}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Usuarios;
