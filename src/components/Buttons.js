import React from 'react';
import "./Button.css";
import arrow from "../assets/Arrow 2.svg"
import { ReactComponent as Arrow } from '../assets/Arrow 2.svg';

export function ResouorcesButton({ children, onClick }){
  return (
    <button style={{color: "purple"}} onClick={onClick}>
      {children}
    </button>
  );
};

export function HomeButton({ children, onClick }){
  return (
    <button className="home" onClick={onClick}>
      <span>{children}</span>
      <div className="arrow"><Arrow/></div>
    </button>
  );
};