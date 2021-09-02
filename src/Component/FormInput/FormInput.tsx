import React, { FC, InputHTMLAttributes } from "react";
import './FormInput.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref?: string;
  handleChange: (e:any) => void;
}

const FormInput:FC<InputProps> = ({ handleChange, ...otherProps }) => {
  return (
        <input className="form__input" onChange={handleChange} {...otherProps} />
  )
}

export default FormInput
