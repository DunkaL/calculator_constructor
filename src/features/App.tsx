import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Palette, Canvas } from "./components";
import { Toggle } from "./elements";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Toggle}>
        <Toggle />
      </div>
      <div className={styles.Constructor}>
        <DndProvider backend={HTML5Backend}>
          <Palette />
          <Canvas />
        </DndProvider>
      </div>
    </div>
  );
};

export default App;
