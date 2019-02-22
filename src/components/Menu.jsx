import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './assets/styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <div><Link to='/#about'><button className='menu-item'>About Me</button></Link></div>
      <div><Link to='/#work'><button className='menu-item'>My Work</button></Link></div>
      <div><Link to='/#background'><button className='menu-item'>Background</button></Link></div>
      <div><Link to='/#interests'><button className='menu-item'>Interests</button></Link></div>
      <div><Link to='/#contact'><button className='menu-item'>Contact</button></Link></div>
      <p onClick={this.toggleMenu}>Close</p>
    </div>
  );  
}

export default Menu;