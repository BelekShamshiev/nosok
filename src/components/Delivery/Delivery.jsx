import React from "react";
import s from "../Delivery/Delivery.module.scss";
const Delivery = () => {
  return (
    <div className={s.container}>
      <div className={s.delivery}>
        <div className={s.delivery_title}>
          <h1>Доставка и оплата оптовых партий женской одежды</h1>
          <div className={s.delivery_title_desc}>
            <p>
              Доставка осуществляется через транспортные компании, обычно
              клиенты заключают договор с карго компанией напрямую. Мы можем
              порекомендовать партнеров, но выбор наиболее выгодных условий — за
              вами.
            </p>
            <p>
              Цена за доставку 1 кг товара — от 40-60 руб, срок доставки от 7
              дней.
            </p>
          </div>
          <div className={s.delivery_title_pay}>
            <h1>Условия оплаты</h1>
            <p>
              50% оплаты производится сразу после того, как вы решаете запускать
              модель, остальные 50% до отгрузки товара.
            </p>
            <p>
              Оплата осуществляется любым удобным для вас способом - на
              расчетные счета, карту или наличными.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
