import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar = () => {
  return (
    <header>
        <h1>marolio online</h1>
        <nav>
            <ul>
                <li>lacteos</li>
                <li>bebidas</li>
                <li>almacen</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
