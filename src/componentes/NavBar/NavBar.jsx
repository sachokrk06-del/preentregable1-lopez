import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
export const NavBar = () => {
  return (
    <header>
        <h1>MI TIENDA</h1>
        <nav>
            <ul>
                <li>Celulares</li>
                <li>Electrodomesticos</li>
                <li>Perfumes</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
