import React from "react";
import classes from "./Card.module.css";

import Image from "next/image";
import Badge from "./Badge";

import { FiMapPin } from "react-icons/fi";

const Card = ({
  startDate,
  tourDuration,
  subStatus,
  destination,
  cardImage,
}) => {
  let bgColor, text;
  if (subStatus === "open") {
    bgColor = "#349e03";
    text = "التسجيل مفتوح";
  }

  if (subStatus === "closed") {
    bgColor = "#BC0000";
    text = "التسجيل مغلق";
  }

  if (subStatus === "soon") {
    bgColor = "#C59500";
    text = "قريبا";
  }

  return (
    <div className={classes["tour__card"]}>
      <div className={classes["tour__card--imgbox"]}>
        <Image
          alt="card image"
          src={cardImage}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={classes["card__img--text"]}>
          <FiMapPin /> <text> {destination} </text>
        </div>
        <Badge bgColor={bgColor} text={text} />
      </div>
      <div className={classes["tour__card--textbox"]}>
        <div
          className={`${classes["card__text"]}  ${classes["card__text--left"]}`}
        >
          <h3>تاريخ الإنطلاق</h3> <h2>{startDate}</h2>
        </div>
        <div
          className={`${classes["card__text"]}  ${classes["card__text--left"]}`}
        >
          <h3>مدة الرحلة</h3> <h2>{tourDuration}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
