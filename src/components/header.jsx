import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.state.showMenu = false;
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu () {
    this.setState({showMenu: !this.state.showMenu});
  }
 
  render() {
    if (this.state.showMenu) {
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
    } else {
      return (
        <div className='heading'>
          <h1 id='home'>Kristin Brewer-Lowe</h1>
          <div onClick={this.toggleMenu}>
            <div className='menuTab1'></div>
            <div className='menuTab2'></div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
