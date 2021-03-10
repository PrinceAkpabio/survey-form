import React, { useState } from "react";
import Anime from 'react-anime';
import useLoadingHook from '../hooks/loadingHook'
import { form } from "../data";
import { CustomInput } from "./custom-input/custom-input.component";
import CustomButton from "./custom-button/custom-button.component";

export function FormPage() {
  const [fields, setFields] = useState({
    name: "",
    age: "",
    residence: "",
    comment: "",
  });

  const {data} = useLoadingHook(form)

  const handleOnChange = ({ currentTarget: { name, value } }) =>
    setFields((state) => ({ ...state, [name]: value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = "https://api.apispreadsheets.com/data/9260/";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        data: {
          name: fields.name,
          age: fields.age,
          residence: fields.residence,
          comment: fields.comment,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        alert("Submitted Successfully");
        setFields({
          name: "",
          age: "",
          residence: "",
          comment: "",
        });
      } else {
        // ERROR
        alert("Submission Error");
      }
    });
  };
  return (
   <>
    {
      data.map((content,i)=>(
    <div key={i} className="formpage component">
        
      <h3 className="form-title">{content.title}</h3>
      <form className="form" onSubmit={handleSubmit} >

        {
          content.input?.map((field) => (
            <CustomInput
              // key={i}
              key={field.id}
              type={field.type}
              name={field.name}
              label={field.label}
              value={fields[field.name]}
              handleChange={handleOnChange}
            />
          ))}
        <CustomButton type="submit">SUBMIT</CustomButton>
      </form>
    </div>
      ))}
</>
  );
}
export default FormPage;
