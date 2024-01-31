import React from "react";
import s from "./Blog.module.scss";
import Image from 'next/image'
const Blog = () => {
  
  return (
    <div className={s.blog}>
      <div className={s.blog_title}>
        <h1>Мы в соцсетях:</h1>
        <div className={s.blog_desc}>
          <Image src="/hudy.png" alt="hudy" width={300} height={470} />
          <Image src="/tranch.png" alt="tranch" width={300} height={470} />
          <Image src="/machine.png" alt="machine" width={300} height={470} />
          <Image src="/soska.png" alt="soska" width={300} height={470} />
          <Image src="/car.png" alt="car" width={300} height={470} />
          <Image src="/shamil.png" alt="shamile" width={300} height={470} />
        </div>
        <div className={s.blog_btn}>
            <a href="https://www.instagram.com/elegant.fabrique?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">

            
            <button>Перейти в профиль</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
