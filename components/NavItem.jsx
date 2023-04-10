import React from "react";
import Link from "next/link";
import classes from "./NavItem.module.css";

const NavItem = ({ children, href }) => {
  const linkString = href || "#";
  return (
    <Link href={linkString} scroll={false} className={classes["nav-item"]}>
      {children}
    </Link>
  );
};

export default NavItem;
