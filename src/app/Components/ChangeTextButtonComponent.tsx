"use client"
import React from 'react'
import { useState } from 'react';
export const ChangeTextButtonComponent = () => {
    const [text, setText] = useState(false);
    const handleClick = () =>{
        if(!text)
          {
      setText(true);
          }else{
            setText(false);
          }
      }
  return (
    <div>
  <p  className={ text ?  "text-lime-600 " : "blur-3xl"}>This is my text</p>
      <button className="bg-white text-black rounded-lg" onClick={handleClick}>Change text Btn</button>
    </div>
  )
}


