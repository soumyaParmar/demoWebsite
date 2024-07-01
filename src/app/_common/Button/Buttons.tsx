import React from 'react'
import style from "./button.module.css"
import { Button } from "antd";

interface propsComponent {
  label:string;
}

const Buttons:React.FC<propsComponent> = ({label}) => {
  return (
    <Button className={style.btn1}>
      {label}
    </Button> 
  )
}

export default Buttons