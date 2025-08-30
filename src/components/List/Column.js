import React from "react";
import styles from "./Column.module.scss";
import Card from "./Card";
import CardForm from "./CardForm";
import { useSelector } from "react-redux";
import { getFilteredCards } from "../../redux/store";

const Column = (props) => {
  // Pobierz karty powiązane z tą kolumną przez selektor
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${props.icon}`} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
