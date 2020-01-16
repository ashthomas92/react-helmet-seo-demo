import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
    return (
      <header className="Header">
        <div className="Wrapper">
          <h1 className="Branding">
            <img src={logo} alt="React Helmet SEO Demo logo" className="Logo" />
            React Helmet SEO Demo
          </h1>
          <div class="Navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </header>
    );
  }
}
