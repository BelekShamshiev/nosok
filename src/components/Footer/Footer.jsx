import React, { useState } from "react";
import s from "./Footer.module.scss";
import AnderFooter from "../AnderFooter/AnderFooter";
import { Modal } from 'antd';
import ApplicationModal from "../ApplicationModal/ApplicationModal";

const Footer = () => {

  const [modal1Open, setModal1Open] = useState(false);

  return (
    <footer>
      <div className={s.container}>
        <div className={s.footer}>
          <div className={s.back}></div>
          <div className={s.footer_desc}>
            <h1>Наши контакты:</h1>
          </div>
          <div className={s.footer_title}>
            <div className={s.footer_one}>
              <div className={s.footer_one_location}>
                <img src="/location.jpg" alt="location" />
                <p>Кыргызская республика, Бишкек</p>
              </div>
              <div className={s.footer_one_email}>
                <img src="/email.jpg" alt="email" />
                <p>Shukur100_81@mail.ru</p>
              </div>
            </div>
            <div className={s.footer_two}>
              <div className={s.footer_two_phone}>
                <img src="/call.jpg" alt="phone" />
                <p>+996 553 458 786</p>
              </div>
              {/* <div className={s.footer_two_social}>
              <a href="https://api.whatsapp.com/send/?phone=778624653&text&type=phone_number&app_absent=0">
                <img src="/whats.jpg" alt="whatsaap" />
              </a>
              <a href="https://www.facebook.com/nosok.bishkek/">
                <img src="/facee.jpg" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/elegant.fabrique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img src="/insta.jpg" alt="insta" />
              </a>
              <a href="https://t.me/+996779624653">
                <img src="/tele.jpg" alt="telegram" />
              </a>
            </div> */}
            </div>
          </div>
          <div className={s.footer_title_btn}>
            <button onClick={() => setModal1Open(true)}>Свяжитесь с нами</button>
          </div>
        </div>
      </div>
      <AnderFooter />
      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        footer={null}
        width={600}
      >
        <ApplicationModal setModal1Open={setModal1Open} />
      </Modal>
    </footer>
  );
};

export default Footer;
