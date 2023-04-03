import React from "react";
import classes from "./ContactUs.module.css";
import FormInput from "../FormInput";
import Container from "../Container";
import SendBtn from "../SendBtn";

import tourist from "../../public/imgs/girl.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className={classes.section}>
      <Container maxWidth="100rem">
        <div className={classes["flex-container"]}>
          <div className={classes.inputs}>
            <div>
              <p>لا تتردد في الإتصال</p>
              <h2>إتصل بنا</h2>
            </div>

            <form>
              <FormInput
                labelText="الإسم"
                type="text"
                name="firstname"
                id="firstname"
              />
              <FormInput
                labelText="اللقب"
                type="text"
                name="lastname"
                id="lastname"
              />
              <FormInput
                labelText="البريد الإلكتروني"
                type="email"
                name="email"
                id="email"
              />
              <FormInput
                labelText="الرسالة"
                type="textarea"
                name="message"
                id="message"
              />
            </form>
            <SendBtn />
          </div>
          <div className={classes["contactus-img"]}>
            <Image
              alt="contact us image"
              src={tourist}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
