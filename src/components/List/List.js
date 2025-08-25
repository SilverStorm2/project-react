import React, { useState } from "react";
import styles from "./List.module.scss";
import Column from "./Column";
import ColumnForm from "./ColumnForm";
import { nanoid } from "nanoid"; // zamień shortid na nanoid

const List = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: "Books", icon: "book" },
    { id: 2, title: "Movies", icon: "film" },
    { id: 3, title: "Games", icon: "gamepad" },
  ]);

  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      { id: nanoid(), title: newColumn.title, icon: newColumn.icon }, // użyj nanoid()
    ]);
  };

  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} title={column.title} icon={column.icon} />
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </section>
  );
};

export default List;
