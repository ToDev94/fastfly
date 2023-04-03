import React from "react";
import { useState } from "react";
import Link from "next/link";
import classes from "./Navigation.module.css";
import NavItem from "./NavItem";
import CTABtn from "./CTABtn";
import { FiMail, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { key: 1, text: "الرحلات" },
  { key: 2, text: "عملائنا" },
  { key: 3, text: "إكتشف معنا" },
];

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link href="#" className={classes.logo}>
        FastFly
      </Link>
      <SmallViewNav /> <LargeViewNav />
    </nav>
  );
};

export default Navigation;

const LargeViewNav = () => {
  return (
    <div className={classes["nav-items"]}>
      <ul className={classes["nav-items"]}>
        {navItems.map((item, i) => (
          <li key={item.key}>
            <NavItem> {item.text} </NavItem>
          </li>
        ))}
      </ul>
      <CTABtn>
        <FiMail /> إتصل بنا
      </CTABtn>
    </div>
  );
};

const SmallViewNav = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const HandleClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <DrawerBtn isOpen={isOpen} onClick={HandleClick} />
      <div
        className={`${classes["Drawer__Container"]} ${
          isOpen ? classes["Drawer__Container--isOpen"] : ""
        }`}
      >
        <div className={classes["drawer__content"]}>
          <div className={classes["drawer__header"]}>
            <DrawerBtn isOpen onClick={HandleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

const DrawerBtn = ({ onClick, isOpen }) => {
  return (
    <button className={classes["drawer--btn"]} onClick={onClick}>
      {isOpen ? <FiX /> : <FiMenu />}
    </button>
  );
};
