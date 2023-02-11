import { Navbar, NavbarBrand } from 'reactstrap'
import React from 'react'

export default function Navigation() {
  return (
    <div>
        <Navbar color="secondary" dark = "true" light expand="md">
            <div className="container">
            <NavbarBrand href='/'>
                Bohubrihi Restaurant
            </NavbarBrand>
            </div>
        </Navbar>
    </div>
  )
}
