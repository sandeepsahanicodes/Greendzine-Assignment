import React from 'react';
import '../styles/CardView.css';

const CardView = ({heading, placeholder, btnText}) => {
  return (
    <div className='parent-container'>
        <div className='first-container'>
            <h1>{heading}</h1>
            <input 
            type="email" 
            className='input'
            placeholder= {placeholder}
            name="" 
            id="" />
            <button className='button'>{btnText}</button>
        </div>
        <div className='second-container'>
            <p>Web Application with Analytics Dashboard</p>
        </div>
    </div>
  );
};

export default CardView;