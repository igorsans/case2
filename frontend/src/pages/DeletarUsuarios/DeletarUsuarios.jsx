import React, { useState } from "react";
import { deleteUsuarios } from "../../Api/usuariosApi";

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
      setValues({ email: "" });
    },
  };
};
const DeletarUsuarios = () => {
  const formCadastro = useForm({
    initialValues: { email: "" },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formCadastro.values);
          formCadastro.clearform();
          deleteUsuarios(formCadastro.values.email);
          alert("usuario Deletado");
        }}
      >
        <input
          placeholder="email do usuario"
          name="email"
          value={formCadastro.values.email}
          onChange={formCadastro.handleChange}
        />
        <button>Deletar</button>
      </form>
    </div>
  );
};

export default DeletarUsuarios;
