import React from 'react'
import Link from 'next/link'
import classes from "./DiscoverMoreBtn.module.css"

const DiscoverMoreBtn = ({children}) => {
  return (
    <Link href="#"  className={classes["discover-btn"]} > {children} </Link>
  )
}

export default DiscoverMoreBtn