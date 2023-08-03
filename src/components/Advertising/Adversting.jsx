import React from "react";
import s from "./Advertising.module.scss";
import Image from "next/image";
const Adversting = () => {
  return (
    <div className={s.adversting}>
      <div className={s.title}>
        <div className={s.title_head}>
          <h1>Платформа будет полезна</h1>
        </div>
        <div className={s.title_card}>
          <div className={s.card_one}>
            <div className={s.card_one_img}>
              <img src="/oo.svg" alt="first"></img>
            </div>
            <div className={s.card_one_desc}>
              <p>
                Вы постоянно сталкиваетесь с проблемой поиска швейного
                производства, способного уже сейчас отшить для вас заказ по
                вашим критериям
              </p>
            </div>
          </div>
          <div className={s.card_second}>
            <div className={s.card_second_img}>
              <img src="/aa.svg" alt="second"></img>
            </div>
            <div className={s.card_second_desc}>
              <p>
                Ваше производство не загружено на 100%,у вас есть свободные
                ресурсы и вам необходимы заказы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adversting;
