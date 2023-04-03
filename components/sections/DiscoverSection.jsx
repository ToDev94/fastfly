import React from "react";
import classes from "./DiscoverSection.module.css";
import Container from "../Container";

const DiscoverSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes["img-bg"]}>
        <h2 className={`secondary-heading ${classes["secondary-heading"]}`}>
          إكتشف معنا جنة الصحراء
        </h2>
        <h3 className={classes["section__text"]}>
          تعد منطقة الواحات بالجنوب الشرقي للجزائر من أهم الوجهات السياحية للبلد
          وذلك للواحات الطبيعة الخلابة المنبثقة من عمق الصحراء
        </h3>

        <iframe
          className={classes.iframe}
          src="https://www.youtube.com/embed/O3aebtDYL5Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={classes["white-bg"]}> </div>
    </section>
  );
};

export default DiscoverSection;
