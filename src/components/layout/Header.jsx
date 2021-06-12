/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Header = (props)=> {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 py-2.5 pb-0">
      <div className="container">
        <Link to="/" className="navbar-brand text-warning" style={{fontFamily: 'sans-serif'}}><h2>{branding}</h2></Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />  Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'MyContact'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;
