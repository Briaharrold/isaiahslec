"use client";
import React from "react";

interface IchildProps {
  changeText: (text: string) => void;
}
const InputComponent = ({ changeText }: IchildProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeText(e.target.value);
  };

  return (
    <div>
      <input type="text" className="text-black" onChange={handleChange} />
    </div>
  );
};

export default InputComponent;
