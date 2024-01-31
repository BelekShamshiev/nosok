import React from "react";
import s from "./Abouts.module.scss";
import Image from "next/image";
const Abouts = () => {
  return (
    <div className={s.about}>
      <div className={s.about_title}>
        <div className={s.about_title_head}>
          <h1 id="about">О фабрике</h1>
        </div>
        <div className={s.title_first}>
          <p>
            Добро пожаловать в нашу фабрику носков! Мы с гордостью представляем
            вам нашу уникальную линию стильных и качественных носков, которые
            объединяют в себе передовые технологии и искусство мастеров шитья.
            Наша фабрика является настоящим источником комфорта и долговечности.
          </p>
          <Image src="/fab.jpg" alt="ele" width={500} height={300}></Image>
        </div>
    
      
     
      </div>
    </div>
  );
};

export default Abouts;
