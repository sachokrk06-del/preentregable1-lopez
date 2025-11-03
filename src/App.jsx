import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TituloPrincipal from './componentes/TiuloPrincipal/TituloPrincipal'
import { Boton } from './componentes/Boton/Boton'
import { ItemCount } from './componentes/contador/ItemCount'
import { NavBar } from './componentes/NavBar/NavBar'
import { CartWidget } from './componentes/CartWidget/CartWidget'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  let cantidad = 10
  const celular = {
    marca: "samsung",
    precio:"5000"
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer comunicado = "holaaa"/>





      {/* <ItemCount stock={20}/>
      <hr />
      <ItemCount stock={15}/> */}



      {/* <header className='colorFondo'>
        <h1>hola tienda hoy hay {cantidad} usuarios comprando</h1>  
        <nav>
          <TituloPrincipal saludo="esto es una props" producto={celular}/> 
          <Boton texto="agregar"/>
          <Boton texto= "eliminar"/>
           <Boton texto= "salir"/>
        </nav>

        
      </header> */}
    </>
  )
}

export default App
