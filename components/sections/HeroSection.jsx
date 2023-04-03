import React from "react";
import Container from "../Container";
import Partners from "../Partners";
import DiscoverMoreBtn from "../DiscoverMoreBtn";
import classes from "./HeroSection.module.css";
import { FiChevronDown } from "react-icons/fi";
import Navigation from "../Navigation";

const HeroSection = () => {
  return (
    <>
      <section className={classes["hero-section"]}>
        <Navigation />

        <div className={classes["hero-content"]}>
          <div className={classes["hero-text"]}>
            <h1 className={`primary-heading ${classes["primary-heading"]}`}>
              وكالة فاست فلاي السياحية
            </h1>
            <h2 className={`secondary-heading ${classes["secondary-heading"]}`}>
              رفيق مغامراتكم الدائم
            </h2>
          </div>
          <DiscoverMoreBtn>
            <FiChevronDown /> إكتشف أكثر
          </DiscoverMoreBtn>
        </div>
      </section>
      <Partners />
    </>
  );
};

export default HeroSection;
