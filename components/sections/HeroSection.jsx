import React from "react";
import { useRef, useState, useEffect } from "react";
import Container from "../Container";
import Partners from "../Partners";
import DiscoverMoreBtn from "../DiscoverMoreBtn";
import classes from "./HeroSection.module.css";
import { FiChevronDown } from "react-icons/fi";
import Navigation from "../Navigation";

const HeroSection = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  return (
    <>
      <section id="hero" ref={containerRef} className={classes["hero-section"]}>
        <Navigation isVisible={isVisible} />

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

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, isVisible];
};
