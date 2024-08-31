import React from 'react';
import s from "../Header/Header.module.scss"
const Header = () => {
    return (
        <div className={s.header}>
              <div className={s.header}>
        <div className={s.header_dev}>
          <marquee direction="left" scrollAmount="10">
          <p>Фабрика с мощностью 100 000 изделии в месяц      •  Работаем с ТОП селлерами  •  Узко-специализированное производство </p>
          </marquee>
        </div>  
      </div>
        </div>
    );
};

export default Header;