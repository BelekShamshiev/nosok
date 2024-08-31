import React from 'react';
import s from './About.module.scss';
// import teamMember from '../../assets/team-member.jpg'; // Пример изображения для команды

const AboutPage = () => (
  <div className={s.about}>
    <section className={s.intro}>
      <h1>О Нас</h1>
      <p>
        Elegant Fabrique — это место, где рождается искусство современного шитья. 
        Мы гордимся нашим мастерством и вниманием к деталям, создавая уникальные 
        изделия для наших клиентов.
      </p>
    </section>
    <section className={s.history}>
      <h2>Наша История</h2>
      <p>
        Наша компания была основана с целью предоставить высококачественные 
        услуги по пошиву и ремонту одежды. Мы используем только лучшие материалы 
        и современные технологии, чтобы удовлетворить потребности каждого клиента.
      </p>
    </section>
    <section className={s.team}>
      <h2>Наша Команда</h2>
      <div className={s.teamMembers}>
        <div className={s.member}>
          {/* <img src={teamMember} alt="Имя Командного Члена" /> */}
          <div className={s.memberInfo}>
            <p className={s.memberName}>Имя Командного Члена</p>
            <p className={s.memberRole}>Краткая биография или описание роли.</p>
          </div>
        </div>
        {/* Добавьте дополнительные командные члены здесь */}
      </div>
    </section>
    <section className={s.testimonials}>
      <h2>Отзывы Клиентов</h2>
      <div className={s.testimonial}>
        <p>"Отличное качество и сервис! Я очень довольна своими новыми платьями."</p>
        <p>- Имя Клиента</p>
      </div>
      {/* Добавьте дополнительные отзывы здесь */}
    </section>
  </div>
);

export default AboutPage;
