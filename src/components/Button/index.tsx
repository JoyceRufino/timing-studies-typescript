import React from "react";
import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.btn}>
      {children}
    </button>
  );
}

export default Button;
