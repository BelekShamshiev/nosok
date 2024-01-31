import React from "react";
import s from "./Sidebar.module.scss";
import cl from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dropdown, Space } from 'antd'
import { DownOutlined, } from "@ant-design/icons";
import { useRouter } from "next/router";


const SideBar = ({ showNav, setShowNav, openMenu, setOpenMenu, style, menu , setIsVisible }) => {
  const handleClick = () => {
    setShowNav(!showNav), setOpenMenu(!openMenu);
  };

  const { pathname } = useRouter();

  const checkMain = pathname === "/" ? { color: "#000" } : { color: "black" };

  return (
    // Burger menu navbar
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0, duration: 0.5 }}
      // style={style || pathname === "/" ? {background: "white"} : {marginTop: "0"}}
      className={s.show ? cl(s.sideNav, s.show) : s.sideNav}
    >
      <div className={s.close} onClick={() => setShowNav(!showNav) || setIsVisible(false) || setOpenMenu(true)}>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
        </svg>
      </div>
      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <Link href="/" onClick={handleClick}>
            Главная
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <Link href="/about" onClick={handleClick}>
            О компании
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <Link href="/delivery">
            <li>Доставка и оплата</li>
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <Dropdown overlay={menu}>
            <a  onClick={(e) => e.preventDefault()}>
              <Space>
                Каталог 2024
                <DownOutlined
                  style={{
                    fontSize: "16px",
                    paddingRight: "6px",
                    paddingBottom: "6px",
                  }}
                />
              </Space>
            </a>
          </Dropdown>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
        <Link href="/contact" onClick={handleClick}>
            Контакты
        </Link>
        
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default SideBar;
