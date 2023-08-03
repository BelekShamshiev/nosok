import React from "react";
import s from "./For.module.scss";
import Image from "next/image";
const For = () => {
  return (
    <div className={s.for}>
      <div className={s.for_title}>
        <div className={s.for_title_head}>
          <h1>Для кого ?</h1>
        </div>
        <div className={s.for_title_title}>
          <div className={s.for_title_desc}>
            <div className={s.for_title_desc_first}>
              <div className={s.for_title_photo_first}>
                <Image
                  src="/first.svg"
                  alt="first"
                  width={300}
                  height={200}
                ></Image>
              </div>
              <div className={s.for_title_desc_first_head}>
                <h1>Заказчикам</h1>
              </div>
              <div className={s.for_title_desc_first_desc}>
                <p>
                  Отбирайте фабрики, цеха, комбинаты отрасли на единой платформе
                </p>
                <p>Формируйте подборки по категориям и видам производств</p>
                <p>Получайте предложения напрямую от поставщиков сырья</p>
                <p>Получайте лучшие цены на пошив</p>
                <p>Экономьте время и деньги</p>
              </div>
            </div>
            <div className={s.for_title_desc_second}>
              <div className={s.for_title_photo_second}>
                <Image
                  src="/second.svg"
                  alt="second"
                  width={300}
                  height={200}
                ></Image>
              </div>
              <div className={s.for_title_desc_second_head}>
                <h1>Производителям</h1>
              </div>
              <div className={s.for_title_desc_second_desc}>
                <p>
                  Получайте заказы без посредников

                </p>                  <p> Формируйте подборки по категориям и видам производств </p>
                  <p> Получайте доступ к госзаказам</p>
                  <p>Получайте лучшие цены на сырьё, подберите поставщика</p>
              </div>
            </div>
            <div className={s.for_title_desc_three}>
              <div className={s.for_title_photo_three}>
                <Image
                  src="/three.svg"
                  alt="three"
                  width={300}
                  height={200}
                ></Image>
              </div>
              <div className={s.for_title_desc_three_head}>
                <h1>Поставщикам</h1>
              </div>
              <div className={s.for_title_desc_three_desc}>
                <p>
                  Предлагайте ваши материалы, фурнитуру, оборудование швейным
                  производствам
                </p>

                <p>Откликайтесь на заказы по поставке сырья</p>
                <p>Размещайте ваши товары на отраслевой доске объявлений</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default For;
