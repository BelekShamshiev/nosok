import About from '@/components/About/About';
import Adversting from '@/components/Advertising/Adversting';
import Card from '@/components/Card/Card';
import Contact from '@/components/Contact/Contact';
import For from '@/components/For/For';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Project from '@/components/Project/Project';
import React from 'react';
import SEO from '@/components/SEO/SEO';

export default function Home() {
  const pageTitle = "Elegant Socks - Текстильная фабрика";
  const pageDescription = "Производство высококачественных носков от текстильной фабрики Elegant Socks.";
  const pageImage = "ссылка на изображение вашего логотипа или продукции"; // Замените на фактическую ссылку на изображение
  return (
    <>
     <SEO title={pageTitle} description={pageDescription} image={pageImage} />
        <Header />
        <Hero />
        <Project />
        <For />
        <Adversting />
        <About />
        <Card />
        <Contact />
    </>
  )
}