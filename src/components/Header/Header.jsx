// components/Header.js

import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPageScrolled = window.scrollY > 0;
      setIsScrolled(isPageScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className={`${s.header} ${isScrolled ? s.scrolled : "black"}`}>
        <div className={s.header_title}>
          <a href="#about">О ФАБРИКЕ</a>
          <Image src="/logo.png" alt="logo" width={300} height={75}></Image>
          <a href="#contact">КОНТАКТЫ</a>
        </div>
      </div>
  );
};

export default Header;
