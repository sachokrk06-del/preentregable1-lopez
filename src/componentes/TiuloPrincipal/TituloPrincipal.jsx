import React from 'react'

const TituloPrincipal = ({saludo, producto}) => {

    console.log(producto);
    

  return (
    <h2>{saludo}</h2>
  )
}

export default TituloPrincipal