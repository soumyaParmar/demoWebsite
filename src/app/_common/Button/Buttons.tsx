import React from "react";
import style from "./button.module.css";
import { Button } from "antd";

interface propsComponent {
  label: string;
  varient: string;
  size?: string;
}

const Buttons: React.FC<propsComponent> = ({ label, varient, size }) => {
  return (
    <Button
      className={varient == "fill" ? style.btn1 : style.btn2}
      style={
        size === "big"
          ? { fontSize: "18px !important", padding: "25px 20px !important" }
          : {}
      }
    >
      {label}
    </Button>
  );
};

export default Buttons;
