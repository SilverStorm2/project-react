import styles from "./FormattedTime.module.scss";

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const ms = String(milliseconds % 1000).padStart(3, "0");
    const totalSeconds = Math.floor(milliseconds / 1000);
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds / 60) % 60)).padStart(
      2,
      "0"
    );
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return <div className={styles.component}>{formatTime(time)}</div>;
};

export default FormattedTime;
