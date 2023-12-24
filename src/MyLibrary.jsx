// src/MyLibrary.jsx
import React from 'react';
import './css/cards.css';

export const MyLibrary = () => {
  return <div>This is my React library!</div>;
};

export const Back = () => {
  return (
    <div className="card">
      <div className="card-back"></div>
    </div>
  )
}