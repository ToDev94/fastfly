import React from 'react'
import Link from 'next/link'
import classes from "./NavItem.module.css"

const NavItem = ({children}) => {
  return (
    <Link href="#" className={classes["nav-item"]} > {children} </Link>
  )
}

export default NavItem