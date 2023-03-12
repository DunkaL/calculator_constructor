import React from "react";
import { Button } from "../../../../elements";
import styles from "./Operations.module.scss";

const Operations: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button title="/" />
      <Button title="x" />
      <Button title="-" />
      <Button title="+" />
    </div>
  );
};

export default Operations;
