import React from 'react'
import Link from 'next/link'
import classes from "./CTABtn.module.css"


const CTABtn = ( {children} ) => {
  return (
    <Link href="#"  className={classes["cta-btn"]} > {children} </Link>
  )
}

export default CTABtn