import React from "react";
import styles from "./App.module.scss";

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.app}>
      <p>{name}</p>
    </div>
  );
};

export default App;
