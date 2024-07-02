import React from 'react'
import style from "./button.module.css"
import { Button } from "antd";

interface propsComponent {
  label:string;
  varient:string;
}

const Buttons:React.FC<propsComponent> = ({label,varient}) => {
  return (
    <Button className={varient=='fill' ? style.btn1 : style.btn2}>
      {label}
    </Button> 
  )
}

export default Buttons