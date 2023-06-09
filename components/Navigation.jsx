import React from "react";
import { useState } from "react";
import Link from "next/link";
import classes from "./Navigation.module.css";
import NavItem from "./NavItem";
import CTABtn from "./CTABtn";
import { FiMail, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { key: 1, text: "الرحلات", href: "#tours" },
  { key: 2, text: "عملائنا", href: "#clients" },
  { key: 3, text: "إكتشف معنا", href: "#discover" },
];

const NavContent = () => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item.key}>
          <NavItem href={item.href}> {item.text} </NavItem>
        </li>
      ))}
    </>
  );
};

const Navigation = (props) => {
  const { isVisible } = props;
  const styles = !isVisible
    ? { backgroundColor: "#2b1745ee", position: "fixed" }
    : {};
  return (
    <nav style={styles} className={classes.navigation}>
      <Link href="#hero" scroll={false} className={classes.logo}>
        Fastfly
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
        <NavContent />
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
          <div className={classes["small-nav--content"]}>
            <ul className={classes["small-nav--items"]}>
              <NavContent />
            </ul>
            <CTABtn>
              <FiMail /> إتصل بنا
            </CTABtn>
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
