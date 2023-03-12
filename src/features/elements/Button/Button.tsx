import React from "react";
import cs from "classnames";
import styles from "./Button.module.scss";

interface Props {
  title: string;
  color?: "outlineLight" | "primary";
  size?: "default" | "medium" | "big" | "full";
  active?: boolean;
}

const Button: React.FC<Props> = ({ title, color = "outlineLight", size = "default", active }) => {
  return (
    <button className={cs(styles.button, styles[color], styles[size], { [styles.hover]: active })}>
      {title}
    </button>
  );
};

export default Button;
