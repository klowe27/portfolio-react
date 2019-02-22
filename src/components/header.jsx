import React from 'react';
import Menu from './Menu';
import './assets/styles/Header.css';

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
        <div className='heading'>
          <h1 id='home'>Kristin Brewer-Lowe</h1>
          <div onClick={this.toggleMenu}>
            <div className='menuTab tab1 x1'></div>
            <div className='menuTab tab2 x2'></div>
          </div>
          <Menu/>
        </div>
      );
    } else {
      return (
        <div className='heading'>
          <h1 id='home'>Kristin Brewer-Lowe</h1>
          <div onClick={this.toggleMenu}>
            <div className='menuTab tab1'></div>
            <div className='menuTab tab2'></div>
          </div>
        </div>
      );
    }
  }
}

export default Header;
