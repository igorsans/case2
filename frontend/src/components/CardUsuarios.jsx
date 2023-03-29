import React from 'react'
import "./CardUsuarios.css"

const CardUsuarios = ({ nome, email}) => {
  return (
    <div className='container'>
        <h2>Usuario</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default CardUsuarios