import React from "react";
import classes from "./ClientsSection.module.css";
import Container from "../Container";
import Users from "../Users";
import Gallery from "./Gallery";

const ClientsSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.testimonials}>
        <Container maxWidth="100rem">
          <h1> فاست فلاي ستشعل فيك روح الشباب و المغامرة </h1>
          <div className={classes["testimony"]}>
            <p>
              خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت
              عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت
              المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠,
              ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية
              الصفحة غزو قد, أي بحث تعداد الجنوب.
            </p>
            <div className={classes["testimony-auth"]}>
              <h3>أحمد سمير</h3>
              <p>عميل و محب للسفر</p>
            </div>
          </div>
          <div className={classes.users}>
            <Users />
          </div>
        </Container>
      </div>
      <div className={classes.gallery}>
        <Gallery />
      </div>
    </section>
  );
};

export default ClientsSection;
