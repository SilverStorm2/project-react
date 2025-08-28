import "font-awesome/css/font-awesome.min.css";
import React, { useState, useEffect } from "react";
import Container from "./components/Container/Container.js";
import Hero from "./components/Hero/Hero.js";
import SearchForm from "./components/SearchForm/SearchForm.js";
import List from "./components/List/List.js";
import FormattedTime from "./components/FormattedTime/FormattedTime";
import styles from "./App.module.scss";

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1)
      );
    }
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const reset = () => {
    setTime(0);
    stop();
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
      <div className={styles.app}>
        <FormattedTime time={time} />
        <div className={styles.buttons}>
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </Container>
  );
};

export default App;
