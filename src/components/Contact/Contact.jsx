import React from "react";
import s from "./Contact.module.scss";
import Image from "next/image";
const Contact = () => {
  return (
    <div className={s.contact} id="contact">
      <div className={s.title}>
        <div className={s.title_c}>
          <div className={s.insta}>
            <a href="https://www.instagram.com/elegant_socks_nosoc/">
              <Image src="/i.png" alt="insta" width={70} height={70}></Image>
            </a>
          </div>
          <div className={s.facebook}>
            <a href="https://www.facebook.com/nosok.bishkek/">
              <Image src="/face.png" alt="facebook" width={70} height={70} />
            </a>
          </div>
          <div className={s.telegram}>
            <a href="https://t.me/+996779624653">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
