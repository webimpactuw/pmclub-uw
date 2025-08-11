import React from 'react';
import "./Button.css";
import { ReactComponent as Arrow } from '../assets/Arrow 2.svg';

export function HomeButton({ children, onClick, disabled }){
  return (
    <button className="home" onClick={onClick} disabled={disabled}>
      <span>{children}</span>
      {!disabled && <div className="arrow"><Arrow/></div>}
    </button>
  );
};