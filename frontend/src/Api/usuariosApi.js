import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  export async function getUsuarios() {
    const response = await api.get("/usuarios");
    console.log(response.data.msg)
    return response.data.msg;
  }
  export async function insertUsuarios(obj) {
    await api.post("/usuarios", obj)
  }
  export async function deleteUsuarios(parametro) {
    await api.delete(`/usuarios/email/${parametro}`)
  }