import Blog from '@/components/Blog/Blog';
import FloatButton from '@/components/FloatButton/FloatButton';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Information from '@/components/Information/Information';
import Sewing from '@/components/Sewing/Sewing';
import Stages from '@/components/Stages/Stages';
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Elegant Socks</title>
        <meta name="description" content="Created by BB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Elegant Socks" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Elegant Socks - фабрика швейно-текстильного производства, где создаются высококачественные носки и другие модные текстильные изделия. Изысканный дизайн, непревзойденное качество и удобство в каждой детали. Познакомьтесь с нашим разнообразным ассортиментом стильных носков, а также других элегантных текстильных изделий для различных повседневных и особых случаев."
        />
        <meta
          name="keywords"
          content="Elegant Socks, elegant , eleg , Elegant , elegant, elegant socks , Elegant socks , швейно-текстильное производство, текстильные изделия, элегантные носки, стильная одежда, модная обувь, аксессуары, оптовые поставки, дизайн носков, дизайн одежды, текстильный дизайн, производство текстиля, индивидуальные заказы, модные тренды, уникальные шаблоны, корпоративные подарки, спортивная одежда, повседневная одежда, стильные аксессуары, модные изделия, оптовые продажи, комфортная обувь, текстиль для дома, текстильные новинки, ткани высокого качества, стильные носки, модные гетры, аксессуары для ног, стильный гардероб"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <FloatButton /> 
      <Header />
      <Hero />
      <Information />
      <Sewing />
      <Stages />
      <Blog/>
    </>
  );
};

export default index;
