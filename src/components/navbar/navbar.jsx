import React from 'react';
import './navbar.css';

export default function navbar(props){
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
