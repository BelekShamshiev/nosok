import React from "react";
import s from "../Information/Information.module.scss";
import { order } from "@/constans/order";

const Information = ({ img, title }) => {
  return (
    <div className={s.container}>
      <div className={s.information}>
        <div className={s.information_title}>
          <h1>
            Оптовый пошив женской <br /> одежды партии от 400 единиц
          </h1>
        </div>
        <div className={s.information_basik}>
          {order.map((item) => (
            <div key={item.id} className={s.information_basik_shirt}>
              <div className={s.information_basik_shirt_img}>
                <img src={item.img} alt="img" />
              </div>
              <div className={s.information_basik_shirt_title}>
                <p>{item.title} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
