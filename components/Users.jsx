import Image from "next/image";
import React from "react";
import classes from "./Users.module.css";
import ana from "../public/imgs/users/ana.jpg";
import alexander from "../public/imgs/users/alexander.jpg";
import harry from "../public/imgs/users/harry.jpg";
import julian from "../public/imgs/users/julian.jpg";
import michael from "../public/imgs/users/michael.jpg";

const Users = () => {
  return (
    <div className={classes.users}>
      <div className={classes.user}>
        <Image alt="user" src={ana} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classes.user}>
        <Image alt="user" src={alexander} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classes.user}>
        <Image alt="user" src={harry} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classes.user}>
        <Image alt="user" src={julian} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classes.user}>
        <Image alt="user" src={michael} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default Users;
