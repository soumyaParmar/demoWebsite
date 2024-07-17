/* eslint-disable react/no-unescaped-entities */
"use client";

import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import style from "./form.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Chip } from "@mui/material";
import { devFormType } from "@/app/Interfaces/devForm";
import * as api from "../../_lib/api";
interface optionType {
  value: string;
}

interface propsComponent {
  setOpenPopuform: Dispatch<SetStateAction<boolean>>;
}

const Forms: React.FC<propsComponent> = ({ setOpenPopuform }) => {
  const [techChips, setTechChips] = useState<string[]>([]);
  const [newOpt, setNewOpt] = useState<optionType[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<boolean>(false);
  const [payload, setPayload] = useState<devFormType>({
    name: "",
    business_email: "",
    company_name: "",
    number_of_employees: "",
    technologies_required: [],
    hiring_needs: "",
    other_information: "",
  });
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

  useEffect(() => {
    setPayload((prev) => ({ ...prev, technologies_required: techChips }));
  }, [techChips]);

  const onSelect = (data: string) => {
    setTechChips((prev) => [...prev, data]);
    setNewOpt([]);
  };
  const onSelect1 = (data: string) => {
    setPayload((prev) => ({ ...prev, number_of_employees: data }));
  };
  const onSelect2 = (data: string) => {
    setPayload((prev) => ({ ...prev, hiring_needs: data }));
    console.log("onSelect", data);
  };

  const handleDelete = (id: number) => {
    const newData = techChips.filter(
      (item: string, index: number) => id != index
    );
    setTechChips(newData);
  };

  const handleChange = (value: string) => {
    setNewOpt([{ value: value }]);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setDisabled(true);
    if (
      !payload.name ||
      !payload.business_email ||
      !payload.company_name ||
      !payload.technologies_required
    ) {
      Modal.warning({
        title: "Warning",
        content: "Please fill all required fields",
      });
      setDisabled(false);
      return;
    }
    const res = await api.postData("/developerDetails", payload);
    console.log(res);
    if ("data" in res && res.data.status == "Success") {
      Modal.success({
        title: "Successfully submitted",
        content: "Thank you",
      });
    } else {
      Modal.error({
        title: "oops an error occurred",
        content: "Please try again",
      });
    }
    setDisabled(false);
  };

  return (
    <>
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
              <label>Your name*</label>
              <Input
                placeholder="Enter your name"
                onChange={(e) => handleInputChange(e)}
                name="name"
                required
              />
            </div>
            <div>
              <label>Business email*</label>
              <Input
                placeholder="Enter your business email"
                onChange={(e) => handleInputChange(e)}
                name="business_email"
                required
              />
            </div>
            <div>
              <label>Company name*</label>
              <Input
                placeholder="Enter your company name"
                onChange={(e) => handleInputChange(e)}
                name="company_name"
                required
              />
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
              <label>Technologies your need*</label>
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
                {techChips?.map((item: string, index: number) => (
                  <Chip
                    label={item}
                    onDelete={() => handleDelete(index)}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div>
              <label>Hiring needs*</label>
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
                onChange={(e) => handleInputChange(e)}
                name="other_information"
                placeholder="Other information"
                style={{ height: 100, resize: "none" }}
              />
            </div>
            <div className={style.btn}>
              <Button disabled={disabled} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
