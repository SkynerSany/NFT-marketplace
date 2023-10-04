'use client'

import { useState } from 'react';
import './checkbox.scss';
import { ICheckbox } from './checkbox.interfaces';

export default function Checkbox({ label, name }: ICheckbox) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className='checkbox-label'>
      <input
        type="checkbox"
        className='checkbox__input'
        name={name}
        value={label}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <div
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      ><div></div></div>
      {
        label
      }
    </label>
  );
}