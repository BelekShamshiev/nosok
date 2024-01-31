import React from "react";
import s from "../About/About.module.scss";
const About = () => {
  return (
    <div>
      <div className={s.about}>
        <div className={s.about_title}>
          <h1>О компании «Elegant Fabrique»</h1>
          <div className={s.about_title_description}>
            <h2>Добро пожаловать в Мир Совершенства и Творчества!</h2>
            <p>
              В Elegant Fabrique, мы не просто создаем одежду, мы воплощаем
              мечты и идеи в реальность. Наша команда профессионалов — это
              настоящие энтузиасты, влюбленные в моду и преданые искусству
              шитья.
            </p>
          </div>
          <div className={s.about_title_line}></div>
        </div>
        <div className={s.about_us}>

        </div>
      </div>
    </div>
  );
};

export default About;
