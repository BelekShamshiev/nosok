import About from '@/components/About/About';
import Adversting from '@/components/Advertising/Adversting';
import Card from '@/components/Card/Card';
import Contact from '@/components/Contact/Contact';
import For from '@/components/For/For';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Project from '@/components/Project/Project';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Elegant Socks</title>
        <meta name="description" content="nosok" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Elegant Socks" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="
          Строительство
          Ремонт и отделка
          Архитектура и проектирование
          Новостройки
          Коммерческая недвижимость
          Жилая недвижимость
          Промышленное строительство
          Инженерные сети и коммуникации."
        />
      </Head >
      <main>
        <Header />
        <Hero />
        <Project />
        <For />
        <Adversting />
        <About />
        <Card />
        <Contact />
      </main>
    </>
  )
}