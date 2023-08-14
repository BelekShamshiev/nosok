import About from '@/components/About/About';
import Adversting from '@/components/Advertising/Adversting';
import Card from '@/components/Card/Card';
import Contact from '@/components/Contact/Contact';
import For from '@/components/For/For';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Project from '@/components/Project/Project';
import React from 'react';

const index = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Project/>
      <For/>
      <Adversting/>
      <About/>
      <Card/>
      <Contact/>
    </>
  );
};

export default index;