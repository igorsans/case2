import React, { useState } from "react";
import { insertUsuarios } from "../../api/usuariosApi";

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
      setValues({ id: "", nome: "", email: "", sobrenome : "" });
    },
  };
};

const CadastrarUsuarios = () => {
  const formCadastro = useForm({
    initialValues: { id: "", nome: "", email: "", sobrenome : "" },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          insertUsuarios(formCadastro.values);
          alert("usuario Cadastrado");
        }}
      >
        <input
          placeholder="Id do Usuario"
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
        <input
          placeholder="Sobrenome do usuario"
          name="sobrenome"
          value={formCadastro.values.sobrenome}
          onChange={formCadastro.handleChange}
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarUsuarios;
