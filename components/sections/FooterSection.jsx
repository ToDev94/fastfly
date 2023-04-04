import React from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMap,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import classes from "./FooterSection.module.css";
import NavItem from "../NavItem";

const FooterSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes["upper-footer"]}>
        <div className={classes.items}>
          <Link href="#" className={classes.logo}>
            FastFly
          </Link>
        </div>
        <div className={classes.items}>
          <NavItem>رحلاتنا المبرمجة</NavItem>
          <NavItem>إكتشف معنا</NavItem>
          <NavItem>قصص عملائنا</NavItem>
        </div>
        <div className={classes.items}>
          <ul>
            <li>
              <FiMail />
              <span>fastflydz@gmail.com</span>
            </li>
            <li>
              <FiPhone />
              <span>0542 57 47 50</span>
            </li>
            <li>
              <FiMap />
              <span>حي الأمير عبد القادر بقمار</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes["lower-footer"]}>
        <FiFacebook /> <FiInstagram /> <FiTwitter />
      </div>
    </section>
  );
};

export default FooterSection;
