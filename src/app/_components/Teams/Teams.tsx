import React from "react";
import style from "./teams.module.css";
import { Silder } from "@/app/_common/Slider/Silder";
import img1 from "../../_assets/teams/binmile.svg";
import img2 from "../../_assets/teams/deci.png";
import img3 from "../../_assets/teams/devlabs.svg";
import img4 from "../../_assets/teams/equipped.svg";
import img5 from "../../_assets/teams/innovation.png";
import img6 from "../../_assets/teams/iq.png";
import img7 from "../../_assets/teams/pelocal.png";
import img8 from "../../_assets/teams/prolitus.png";
import img9 from "../../_assets/teams/tech.svg";
import Image from "next/image";

interface propType {
  color?: "white" | "gray";
}

const Teams: React.FC<propType> = ({ color }) => {
  const data: Array<object> = [
    {
      id: "1",
      item: <Image src={img1} alt="" className={style.image} />,
    },
    {
      id: "2",
      item: <Image src={img2} alt="" className={style.image} />,
    },
    {
      id: "3",
      item: <Image src={img3} alt="" className={style.image} />,
    },
    {
      id: "4",
      item: <Image src={img4} alt="" className={style.image} />,
    },
    {
      id: "5",
      item: <Image src={img5} alt="" className={style.image} />,
    },
    {
      id: "6",
      item: <Image src={img6} alt="" className={style.image} />,
    },
    {
      id: "7",
      item: <Image src={img7} alt="" className={style.image} />,
    },
    {
      id: "8",
      item: <Image src={img8} alt="" className={style.image} />,
    },
    {
      id: "9",
      item: <Image src={img9} alt="" className={style.image} />,
    },
  ];

  const data1: Array<object> = [
    {
      id: "1",
      item: <Image src={img1} alt="" className={style.image1} />,
    },
    {
      id: "2",
      item: <Image src={img2} alt="" className={style.image1} />,
    },
    {
      id: "3",
      item: <Image src={img3} alt="" className={style.image1} />,
    },
    {
      id: "4",
      item: <Image src={img4} alt="" className={style.image1} />,
    },
    {
      id: "5",
      item: <Image src={img5} alt="" className={style.image1} />,
    },
    // {
    //   id: "6",
    //   item: <Image src={img6} alt="" className={style.image1} />,
    // },
    {
      id: "6",
      item: <Image src={img7} alt="" className={style.image1} />,
    },
    {
      id: "7",
      item: <Image src={img8} alt="" className={style.image1} />,
    },
    {
      id: "8",
      item: <Image src={img9} alt="" className={style.image1} />,
    },
  ];

  return (
    <div className={style.outer}>
      {color == "gray" ? <Silder data={data} /> : <Silder data={data1} />}
    </div>
  );
};

export default Teams;
