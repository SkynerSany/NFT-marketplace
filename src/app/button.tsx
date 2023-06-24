'use client'

import { IButtonProps } from './button.interfaces';
import lang from './button.text.json';
import './button.scss';

export default function Button({ handleClick, type, size }: IButtonProps) {
  const text = lang['en'].text;
  
  return (
    <button className={`button button_${ type } button_${ size }`} onClick={handleClick} data-btn={text}></button>
  )
};
