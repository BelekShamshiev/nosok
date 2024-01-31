import React,{useState} from 'react';
import styles from "./Social.module.scss"
const Social = () => {
    return (
<div className={styles.container}>
      <ul className={styles.wrapper}>
      <a href="https://www.facebook.com/nosok.bishkek/" className={`${styles.icon} ${styles.facebook}`}>
        <span className={styles.tooltip}>Facebook</span>
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
      </a>
      <a href='href="https://api.whatsapp.com/send/?phone=778624653&text&type=phone_number&app_absent=0">' className={`${styles.icon} ${styles.twitter}`}>
        <span className={styles.tooltip}>WhatsApp</span>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </a>
      <a href='https://www.instagram.com/elegant.fabrique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className={`${styles.icon} ${styles.instagram}`}>
        <span className={styles.tooltip}>Instagram</span>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
      </a>
      <a href='https://t.me/+996779624653' className={`${styles.icon} ${styles.youtube}`}>
        <span className={styles.tooltip}>Telegram</span>
        <span>
          <i className="fab fa-youtube"></i>
        </span>
      </a>
    </ul>
    </div>
    );
};

export default Social;