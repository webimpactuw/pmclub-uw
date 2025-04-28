import React from 'react';

export function ResouorcesButton({ children, onClick }){
  return (
    <button style={{color: "purple"}} onClick={onClick}>
      {children}
    </button>
  );
};

const homeStyle = {
  color: "white",
  backgroundColor: "purple",
  padding: "5px",
  fontFamily: "Sans-Serif"
};

export function HomeButton({ children, onClick }){
  return (
    <button style={homeStyle} onClick={onClick}>
      {children}
    </button>
  );
};