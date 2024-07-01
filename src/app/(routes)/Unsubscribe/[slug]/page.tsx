/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./unsubscribe.module.css";
import img from "../../../_assets/unsub/unsub1.jpg";
import Image from "next/image";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Unsubscribe = ({ params }: { params: { slug: string } }) => {
  return (
    <div className={style.unsubscribe}>
      <div className={style.unsub_inner}>
        <h1>CoEdify</h1>
        <div className="flex h-4/5 max-[700px]:block">
          <div className={style.image}>
            <Image src={img} alt=""/>
          </div>
          <div className={style.right}>
            <div>
              <h2>Unsubscribe</h2>
              <p>We are sorry to see you go!</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="pb-3">
                Tell us why you want to unsubscribe?
              </h3>
              <FormControl style={{width:"70%",paddingBottom:"10px"}}>
                <InputLabel id="demo-simple-select-label">Please select a reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Please select a reason"
                >
                  <MenuItem value={"Your emails are not relevant to me"}>Your emails are not relevant to me</MenuItem>
                  <MenuItem value={"Your emails are too frequent"}>Your emails are too frequent</MenuItem>
                  <MenuItem value={"I don't remember signing up for this"}>I don't remember signing up for this</MenuItem>
                  <MenuItem value={"I no longer want to receive these emails"}>I no longer want to receive these emails</MenuItem>
                  <MenuItem value={"The emails are spam and should be reported"}>The emails are spam and should be reported</MenuItem>
                  <MenuItem value={"Need a break"}>Need a break</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex w-full justify-center"> 
              <Button variant="contained">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Unsubscribe;