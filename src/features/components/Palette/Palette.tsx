import React from "react";
import { Display, Operations, DigitalBlock, Equality } from "../Calculator/Elements";
import styles from "./Palette.module.scss";

const Palette: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Display />
      </div>

      <div className={styles.wrapper}>
        <Operations />
      </div>

      <div className={styles.wrapper}>
        <DigitalBlock />
      </div>

      <div className={styles.wrapper}>
        <Equality />
      </div>
    </div>
  );
};

export default Palette;
