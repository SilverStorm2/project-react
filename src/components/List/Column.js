import React from "react";
import styles from "./Column.module.scss";
import Card from "./Card";
import CardForm from "./CardForm";

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${props.icon}`} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm action={props.action} columnId={props.id} />
    </article>
  );
};

export default Column;
