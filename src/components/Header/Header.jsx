import React, {  useState } from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import { DownOutlined, } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import { items } from "@/constans/dropdown";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SideBar from "../Sidebar/Sidebar";
import { motion } from 'framer-motion'
import { useRouter } from "next/router";

const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(true);

  // Состояние - для header (для цвета)
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // Состояние - для burger menu
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useRouter();

  const checkMain = pathname === "/" ? { color: "white" } : { color: "black" }

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className={s.header} style={pathname === "/" ? { position: "absolute"  } : { position: "inherit" }} >
      <header  className={s.header_block}>
        <Link href='/'>
          <Image src="/image2vector.svg" alt="logo" width={200} height={55} />
        </Link>
        <ul className={s.header_block__nav}>
          <Link href='/'>
            <li style={checkMain} >Главная</li>
          </Link>
          <Link href="/about">
            <li style={checkMain}>О компании</li>
          </Link>
          <Link href="/delivery">
            <li style={checkMain}>Доставка и оплата</li>
          </Link>
          <Dropdown overlay={menu}>
            <a style={checkMain} onClick={(e) => e.preventDefault()}>
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
          <Link href="/contact">
            <li style={checkMain}>Контакты</li>{" "}
          </Link>
        </ul>
        <motion.div
          className={s.burger_menu}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowNav(!showNav) || setIsVisible(true)}
          style={showNav ? {position: "fixed"} : {position: "relative"}}
        >
          <BurgerMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            text="Invert"
            isHeaderActive={isHeaderActive}
            setIsHeaderActive={setIsHeaderActive}
            variantsTop={{
              open: {
                d: [
                  "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
                  "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
                  "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
                  "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
                  "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
                ],
              },
              closed: {
                d: [
                  "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
                  "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
                  "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
                  "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
                  "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
                ],
              },
            }}
            variantsMiddle={{
              open: {
                d: [
                  "M 78,50 22,50",
                  "M 69.79899,69.79899 30.20101,30.20101",
                  "M 50,78 50,22",
                  "M 30.20101,69.79899 69.79899,30.20101",
                  "M 22,50 78,50",
                ],
              },
              closed: {
                d: [
                  "M 22,50 78,50",
                  "M 30.20101,69.79899 69.79899,30.20101",
                  "M 50,78 50,22",
                  "M 69.79899,69.79899 30.20101,30.20101",
                  "M 78,50 22,50",
                ],
              },
            }}
            variantsBottom={{
              open: {
                d: [
                  "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
                  "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
                  "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
                  "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
                  "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
                ],
              },
              closed: {
                d: [
                  "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
                  "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
                  "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
                  "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
                  "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
                ],
              },
            }}
          />
        </motion.div>
        {showNav && (
          <SideBar
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            showNav={showNav}
            setShowNav={setShowNav}
            menu={menu}
            setIsVisible={setIsVisible}
          />
        )}

      </header>
    </header>
  );
};

export default Header;
