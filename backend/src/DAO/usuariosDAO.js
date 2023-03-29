import database from "../infra/bd.js";

class UsuariosDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM usuarios");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(
      `SELECT * FROM usuarios WHERE email = ?`,
      param
    );
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query(
        "INSERT INTO usuarios (idusuarios, nome, email) VALUES (?,?,?)",
        Object.values(obj)
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "usuario inserido com sucesso na tabela usuarios" },
      status: 201,
    };
  }
  static async deletar(param) {
    try {
      await database.query("DELETE FROM usuarios WHERE email = ?", param);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "usuario deletado com sucesso na tabela usuarios" },
      status: 200,
    };
  }
  static async atualizar(param, obj) {
    try {
      await database.query(
        "UPDATE usuarios SET idusuarios = ? , nome = ?, email = ? WHERE idusuarios = ?",
        [...Object.values(obj), param]
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "usuario atualizado com sucesso na tabela usuarios" },
      status: 200,
    };
  }
}

export default UsuariosDAO;
