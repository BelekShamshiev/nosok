import React from "react";
import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.title_hero}>
          <a href="#">Elegant Socks</a>
          <p>Текстильная фабрика</p>
        </div>
        <div className={s.titile_aur}>
          <div className={s.titile_aur_title}>
            <div className={s.titile_aur_title_desc}>
              <h1>ОсОО Элегант Сокс</h1>
              <div className={s.titile_aur_title_more}>
                <p>Кыргызская Республика, Сокулукский район , с.Взлетная , ул. Су-874 А</p>
              </div>
              <div className={s.titile_aur_title_tel}>
                <p>Тел:</p>
                <a  href="#" type="tel">+996 312 975 424</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
