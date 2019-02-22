import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './assets/styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <div className='menu-top'></div>
      <Link to='/#about'><div className='menu-item'>About Me</div></Link>
      <Link to='/#work'><div className='menu-item'>My Work</div></Link>
      <Link to='/#background'><div className='menu-item'>Background</div></Link>
      <Link to='/#interests'><div className='menu-item'>Interests</div></Link>
      <Link to='/#contact'><div className='menu-item'>Contact</div></Link>
    </div>
  );  
}

export default Menu;