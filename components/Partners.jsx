import Image from "next/image";
import React from "react";
import airAlgerieLogo from "../public/logos/airalgerie.png";
import airFranceLogo from "../public/logos/france.png";
import airEmiratesLogo from "../public/logos/emirates.png";
import airTurkishLogo from "../public/logos/turkish.png";
import airTassiliLogo from "../public/logos/tassili.png";
import airQatarLogo from "../public/logos/qatar.png";
import classes from "./Partners.module.css";

const Partners = () => {
  return (
    <div className={classes["partners-logos"]}>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airAlgerieLogo}
        />
      </div>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airFranceLogo}
        />
      </div>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airEmiratesLogo}
        />
      </div>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airTurkishLogo}
        />
      </div>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airTassiliLogo}
        />
      </div>
      <div className={classes["img-box"]}>
        <Image
          alt="air algerie logo"
          quality={1}
          style={{ objectFit: "contain" }}
          fill
          src={airQatarLogo}
        />
      </div>
    </div>
  );
};

export default Partners;
