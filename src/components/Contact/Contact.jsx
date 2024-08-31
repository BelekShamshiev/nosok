// ContactBlock.jsx
import React from 'react';
import s from './Contact.module.scss'; // Импортируем стили из CSS модуля
import insta from "../../assets/insta.jpg";
import phone from "../../assets/phone.jpg";
import tele from "../../assets/tele.jpg";
import bk from "../../assets/vk.jpg";
const ContactBlock = () => {
  return (
    <div className={s.container}>

   
    <div className={s.contactBlock}>
      <h2 className={s.title}>Связь с нами</h2>
      <div className={s.contactList}>
        <div className={s.contactItem}>
          <img src={bk}alt="VK" className={s.icon} />
          <a href="https://vk.com/yourprofile" className={s.link} target="_blank" rel="noopener noreferrer">
            ВКонтакте
          </a>
        </div>
        <div className={s.contactItem}>
          <img src={phone} alt="Phone" className={s.icon} />
          <a href="tel:+1234567890" className={s.link}>
            +996 (990) 333-999
          </a>
        </div>
        <div className={s.contactItem}>
          <img src={insta} alt="Instagram" className={s.icon} />
          <a href="https://instagram.com/yourprofile" className={s.link} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className={s.contactItem}>
          <img src={tele} alt="Telegram" className={s.icon} />
          <a href="https://t.me/yourprofile" className={s.link} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </div> </div>
  );
};

export default ContactBlock;
