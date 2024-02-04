import React from 'react';
import './footer.css';

export default function footer(props){
  return (
    <>
     <footer className="footer">
        <p> {props.data} </p>
      </footer>
    </>
  );
};
