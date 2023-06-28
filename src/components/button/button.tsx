'use client'

import { IButtonProps } from './button.interfaces';
import './button.scss';

export default function Button({ handleClick, type, size, text }: IButtonProps) { 
  return (
    <button className={`button button_${ type } button_${ size }`} onClick={handleClick} data-btn={text}></button>
  )
};
