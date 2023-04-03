import Image from "next/image";
import React from "react";
import classes from "./Gallery.module.css";

import discover from "../../public/imgs/gallery/discover.jpg";
import sahara from "../../public/imgs/gallery/sahara.jpg";
import snow from "../../public/imgs/gallery/snow.jpg";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <div className={classes.img}>
        <Image
          alt="Cheria mountains"
          src={snow}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={classes["img-text__box"]}>
          <h3>إكتشف جبال الشريعة</h3>
        </div>
      </div>
      <div className={classes.img}>
        <Image
          alt="Sahara camping"
          src={sahara}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={classes["img-text__box"]}>
          <h3>التخييم بالصحراء</h3>
        </div>
      </div>

      <div className={classes.img}>
        <Image
          alt="discover cities"
          src={discover}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={classes["img-text__box"]}>
          <h3>إكتشف المدن</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
