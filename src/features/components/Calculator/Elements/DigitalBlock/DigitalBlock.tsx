import React from "react";
import { Button } from "../../../../elements";
import styles from "./DigitalBlock.module.scss";

const DigitalBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button size="medium" title="7" />
      <Button size="medium" title="8" />
      <Button size="medium" title="9" />
      <Button size="medium" title="4" />
      <Button size="medium" title="5" />
      <Button size="medium" title="6" />
      <Button size="medium" title="1" />
      <Button size="medium" title="2" />
      <Button size="medium" title="3" />
      <Button size="big" title="0" />
      <Button size="medium" title="," />
    </div>
  );
};

export default DigitalBlock;
