/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { Dispatch, SetStateAction, use, useState } from "react";
import style from "./form.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { AutoComplete, Button, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import styledEngine from "@mui/styled-engine";
import { Chip } from "@mui/material";
import { Stack, padding } from "@mui/system";

interface optionType {
  value: string;
}

interface propsComponent {
  setOpenPopuform: Dispatch<SetStateAction<boolean>>;
}

const Forms: React.FC<propsComponent> = ({ setOpenPopuform }) => {
  const [techChips, setTechChips] = useState<string[]>([]);
  const [newOpt,setNewOpt] = useState<optionType[]>([])
  const [opt, setOpt] = useState<optionType[]>([
    { value: "React" },
    { value: "Java" },
    { value: "C#" },
    { value: "C++" },
    { value: "MySQL" },
    { value: "MongoDB" },
    { value: "Angular" },
  ]);
  const [employees, setEmployees] = useState<optionType[]>([
    { value: "1-10" },
    { value: "11-50" },
    { value: "51-250" },
    { value: "251-1K" },
    { value: "1k-5k" },
    { value: "5k-10k" },
    { value: "10k-100k" },
  ]);

  const [needs, setNeeds] = useState<optionType[]>([
    { value: "Full Time" },
    { value: "Part Time" },
  ]);

  const onSelect = (data: string) => {
    setTechChips((prev) => [...prev, data]);
    setNewOpt([]);
  };
  const onSelect1 = (data: string) => {
    // setTechnology((prev) => [...prev, { value: data }]);
    console.log("onSelect", data);
  };
  const onSelect2 = (data: string) => {
    // setTechnology((prev) => [...prev, { value: data }]);
    console.log("onSelect", data);
  };

  const handleDelete = (id: number) => {
    const newData = techChips.filter(
      (item: string, index: number) => id != index
    );
    setTechChips(newData);
  };

  const handleChange = (value:string) =>{ 
    setNewOpt([{ value:value }])
  }

  return (
    <div className={style.form}>
      <div className={style.inner_form}>
        <div className={style.close}>
          <CloseIcon onClick={() => setOpenPopuform(false)} />
        </div>
        <div className={style.heading}>
          <h1>Let's find your developers</h1>
        </div>
        <div className={style.inputs}>
          <div>
            <label>Your name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div>
            <label>Business email</label>
            <Input placeholder="Enter your business email" />
          </div>
          <div>
            <label>Company name</label>
            <Input placeholder="Enter your company name" />
          </div>
          <div>
            <label>Current employees in your company</label>
            <Select
              placeholder="Select"
              style={{ width: "100%" }}
              onSelect={onSelect1}
              options={employees}
            />
          </div>
          <div>
            <label>Technologies your need</label>
            <Select
              showSearch
              placeholder="Select"
              style={{ width: "100%" }}
              onSelect={onSelect}
              onSearch={handleChange}
              filterOption={(input, option) =>
                (option?.value ?? "")
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase())
              }
              options={newOpt.length ? newOpt : opt}
            />
            <div className="pt-[10px]">
              {techChips?.map((item: string, index: number) => 
                  <Chip label={item} onDelete={() => handleDelete(index)} key={index}/>
              )}
            </div>
          </div>
          <div>
            <label>Hiring needs</label>
            <Select
              placeholder="Select"
              style={{ width: "100%" }}
              onSelect={onSelect2}
              options={needs}
            />
          </div>
          <div>
            <label>Any other information</label>
            <TextArea
              showCount
              maxLength={100}
              //   onChange={onChange}
              placeholder="Other information"
              style={{ height: 100, resize: "none" }}
            />
          </div>
          <div className={style.btn}>
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
