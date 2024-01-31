import React from "react";
import s from "./AnderFooter.module.scss";
import Link from "next/link";
const AnderFooter = () => {
  return (
    <div className={s.ander}>
      <div className={s.ander_block}>
        <div className={s.ander_block_title}>
          <div className={s.ander_block_title_logo}>
            <Link
            href="/">
            <img src="/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={s.ander_block_title_section}>
            <a href="/">Главная</a>
            <Link href="/about">
              <li>О компании</li>
            </Link>
            <a href="https://t.me/elegantfabrique">Блог</a>
            <Link href="/contact">Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnderFooter;
