// src/MyLibrary.jsx
import React from 'react';
import './css/cards.css';
import './club.svg';

export const MyLibrary = () => {
  return <div>This is my React library!</div>;
};

export const Back = () => {
  return (
    <div className="card">
      <img src={require('./assets/club.svg').default} alt="My SVG" />
      <div className="card-back"></div>
    </div>
  )
}