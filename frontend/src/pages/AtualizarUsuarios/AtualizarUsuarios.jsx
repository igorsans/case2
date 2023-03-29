import React, { useState } from "react";
import { atualizarUsuario } from "../../Api/usuariosApi";

const useForm = (propsDoForm) => {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    clearform() {
      setValues({ id: "", nome: "", email: "" });
    },
  };
};

const AtualizarUsuarios = () => {
  const formCadastro = useForm({
    initialValues: { id: "", nome: "", email: "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          atualizarUsuario(formCadastro.values.id, formCadastro.values);
          alert("usuario atualizado");
        }}
      >
        <input
          placeholder="Id do Usuario que você quer atualizar"
          name="id"
          value={formCadastro.values.id}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Nome do usuario"
          name="nome"
          value={formCadastro.values.nome}
          onChange={formCadastro.handleChange}
        />
        <input
          placeholder="Email do usuario"
          name="email"
          value={formCadastro.values.email}
          onChange={formCadastro.handleChange}
        />
        <button>Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarUsuarios;
