import React from "react";
import s from "./About.module.scss";
import Image from "next/image";
const About = () => {
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
          <Image src="/fab.jpg" alt="ele" width={700} height={400}></Image>
        </div>
        <div className={s.title_second}>
          <Image
            src="/mashina.jpg"
            alt="mashina"
            width={500}
            height={300}
          ></Image>
          <p>
            Мы также гордимся нашими передовыми технологиями производства.
            Внедрение инноваций и современных методов позволяет нам создавать
            носки, которые не только отличаются стилем, но и обладают высокой
            прочностью и долговечностью. Вы можете быть уверены, что наши носки
            прослужат вам долгие годы, сохраняя свой первоначальный вид и
            качество.
          </p>
        </div>
        <div className={s.title_three}>
          <p>
            Мы уделяем особое внимание каждой детали в процессе создания наших
            носков. Материалы, которые мы используем, отобраны с особым
            трепетом, чтобы обеспечить исключительную мягкость и приятное
            ощущение на вашей коже. Наши мастера шитья, обладающие богатым
            опытом и навыками, воплощают ваше комфортное облегание в каждом шве,
            обеспечивая идеальную посадку и поддержку.
          </p>
          <Image src="/cfd.jpg" alt="hlopok" width={340} height={450}></Image>
        </div>
        <div className={s.title_foure}>
          <Image src="/d.jpg" alt="dd" width={600} height={370}></Image>
          <p>
            В нашей фабрике мы придаем огромное значение благополучию и
            удовлетворенности наших сотрудников. Мы обеспечиваем комфортные
            условия труда, предлагаем разнообразные программы обучения и
            развития. Безопасность и здоровье наших сотрудников — наша
            первоочередная забота. Мы ценим равенство, поддерживаем разнообразие
            и создаем включающую рабочую среду, где каждый сотрудник имеет
            возможность раскрыть свой потенциал. Вместе мы стремимся к
            достижению высокого качества и успеху нашей фабрики.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
