import React from "react";
import style from "./teams.module.css";
import { Silder } from "@/app/_common/Slider/Silder";

const Teams: React.FC = () => {
  const data: Array<object> = [
    {
      id: "1",
      item: <h1 className={style.h1}>Coedify</h1>,
    },
    {
      id: "2",
      item: <h1 className={style.h1}>Equipped</h1>,
    },
    {
      id: "3",
      item: <h1 className={style.h1}>PayLocal</h1>,
    },
    {
      id: "4",
      item: <h1 className={style.h1}>Adani</h1>,
    },
    {
      id: "5",
      item: <h1 className={style.h1}>BlackRock</h1>,
    },
    {
      id: "6",
      item: <h1 className={style.h1}>Airtel</h1>,
    },
  ];
  return (
    <div className={style.outer}>
      <Silder data={data} />
    </div>
  );
};

export default Teams;
