import React from 'react';
import './navbar.css';
import PropTypes from 'prop-types';

export default function Navbar(props){
  return (
    <>
      <nav>
        <ul>
          <li> {props.home} </li>
          <li> {props.about} </li>
          <li> {props.contact} </li>
          <li> {props.more} </li>
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = { 
  home : PropTypes.string.isRequired, 
  about : PropTypes.string.isRequired,
  contact : PropTypes.string.isRequired,
  more : PropTypes.string.isRequired,
} 

Navbar.defaultProps = {
  home : 'home text ',
  about : 'about text ',
  contact : 'contact text ',
  more : 'more text ',
}
