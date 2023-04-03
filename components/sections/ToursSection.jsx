import React from "react";
import Container from "../Container";
import classes from "./ToursSection.module.css";

import turkey from "../../public/imgs/cards-img/turkey.jpg";
import malaysia from "../../public/imgs/cards-img/malaysia.jpg";
import dubai from "../../public/imgs/cards-img/dubai.jpg";

import Card from "../Card";
const ToursSection = () => {
  return (
    <section className={classes["tours__section"]}>
      <Container>
        <h2 className={`secondary-heading ${classes["secondary-heading"]}`}>
          رحلاتنا المبرمجة
        </h2>
        <p className={classes["section__text"]}>
          تسعى وكالتنا لضمان راحتكم وقضائكم أجمل الأوقات خلال جميع رحلاتنا
          المبرمجة بجميع الوجهات
        </p>

        <div className={classes["tour__cards"]}>
          <Card
            startDate="22 أكتوبر"
            tourDuration=" 13 يوم"
            subStatus="open"
            destination="تركيا"
            cardImage={turkey}
          />
          <Card
            startDate="13 ديسمبر"
            tourDuration="10 أيام"
            subStatus="soon"
            destination="ماليزيا"
            cardImage={malaysia}
          />
          <Card
            startDate="13 ديسمبر"
            tourDuration="10 أيام"
            subStatus="closed"
            destination="دبي"
            cardImage={dubai}
          />
        </div>
      </Container>
    </section>
  );
};

export default ToursSection;
