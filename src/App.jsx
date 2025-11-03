import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './componentes/NavBar/NavBar'
import { CartWidget } from './componentes/CartWidget/CartWidget'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer comunicado = "esto es una prueba de que hice un props"/>


    </>
  )
}

export default App
