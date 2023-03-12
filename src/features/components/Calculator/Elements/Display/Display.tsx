import React from "react";
import styles from "./Display.module.scss";

interface Props {
  count?: number;
}

const Display: React.FC<Props> = ({ count = 0 }) => {
  return <div className={styles.wrapper}>{count}</div>;
};

export default Display;
