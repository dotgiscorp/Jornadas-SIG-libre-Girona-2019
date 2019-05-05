import React from 'react';
import './style.scss';

const Button = props => (
    <button className={`custom-button ${props.position}`} onClick={props.handleSwitch}></button>
);
  
export default Button;