import React from "react";
import s from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={s.container}>
        <div className={s.title}>
          <div className={s.title_hero}>
            <div className={s.title_hero_desc}>
              <h1>Elegant Fabrique</h1>
              <hr />
              <p>
                "Elegant Fabrique — Место Где Рождается <br /> Искусство Современного
                Шитья"
              </p>
              {/* <div className={s.title_hero_btn}>
                <button>Каталог 2024</button>
              </div> */}
            </div>

          </div>
        </div>
      </div>  );
};

export default Hero;
