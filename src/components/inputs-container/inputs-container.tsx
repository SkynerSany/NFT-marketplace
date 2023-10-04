'use client'

import { useState } from "react";
import Checkbox from "./checkbox/checkbox";
import { IInputsContainerProps } from "./inputs-container.interfaces"
import Radio from "./radio/radio";

export default function InputsContainer({ inputs }: IInputsContainerProps) {
  const [currentRadio, setCurrentRadio] = useState(inputs.labels[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentRadio(event.target.value);
  };

  const isChecked = (value: string) => currentRadio === value;

  return (
    <ul className="inputs-container">
      {
        inputs.labels.map((label: string) => {
          if (inputs.type === 'radio') {
            return <li><Radio label={label} name={inputs.name} handleChange={handleChange} isChecked={isChecked(label)} /></li>
          }

          return <li><Checkbox label={label} name={inputs.name} /></li>
        })
      }
    </ul>
  )
}
