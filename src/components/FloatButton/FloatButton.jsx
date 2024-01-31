import React from "react";
import s from "./FloatButton.module.scss";
const FloatButton = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send/?phone=778624653&text&type=phone_number&app_absent=0">
        <img src="/float.png" alt="what" className={s.floatButton}></img>
      </a>
      <a href="https://t.me/+996779624653">
        <img src="/telee.png" alt="telegram" className={s.floatbutton} />
      </a>
    </div>
  );
};

export default FloatButton;
