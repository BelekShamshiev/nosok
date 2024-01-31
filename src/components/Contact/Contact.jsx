import React from "react";
import s from "../Contact/Contact.module.scss";
import Image from "next/image";
const Contact = () => {
  return (
    <div className={s.container}>
      <div className={s.contact}>
        <div className={s.contact_title}>
          <h1>Связаться с нами</h1>
          <p>Мы находимся по адресу:</p>
        </div>
        <div className={s.contact_map}>
          <div className={s.card}>
            <div className={s.title}>
              <div className={s.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.521309464689!2d74.43435817595956!3d43.07253438979311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ee976d38ce31f%3A0x531428dafaa61cb0!2sElegant%20Socks%20LLC!5e0!3m2!1sru!2skg!4v1690375591443!5m2!1sru!2skg"
                  allowfullscreen=""
                  loading="fast"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={s.social_media}>
          {/* <div className={s.social_media_title}>
            <div className={s.insta}>
            <a href="https://www.instagram.com/elegant.fabrique/">
              <Image src="/i.png" alt="insta" width={50} height={50}></Image>
            </a>
          </div>
          <div className={s.facebook}>
            <a href="https://www.facebook.com/nosok.bishkek/">
              <Image src="/face.png" alt="facebook" width={50} height={50} />
            </a>
          </div>
          <div className={s.telegram}>
            <a href="https://t.me/elegantfabrique">
              <Image
                src="/tel.jpg"
                alt="telegram"
                width={70}
                height={70}
              ></Image>
            </a>
          </div>
          <div className={s.whatsapp}>
            <a href="https://api.whatsapp.com/send/?phone=778624653&text&type=phone_number&app_absent=0">
              <Image
                src="/i.webp"
                alt="whatsapp"
                width={70}
                height={70}
              ></Image>
            </a>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
