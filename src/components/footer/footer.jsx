import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

export default function Footer(props){
  return (
    <>
     <footer className="footer">
        <p> {props.data} </p>
      </footer>
    </>
  );
};

Footer.propTypes = {
  data : PropTypes.string.isRequired, 
}
