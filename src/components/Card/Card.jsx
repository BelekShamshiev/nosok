import React from "react";
import s from "./Card.module.scss";
const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.title}>
        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.521309464689!2d74.43435817595956!3d43.07253438979311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ee976d38ce31f%3A0x531428dafaa61cb0!2sElegant%20Socks%20LLC!5e0!3m2!1sru!2skg!4v1690375591443!5m2!1sru!2skg"
            allowfullscreen=""
            loading="fast"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Card;  
