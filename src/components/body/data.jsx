import React from 'react';
import PropTypes from 'prop-types';

export default function Body(props){
  return (
    <>
     <dt> {props.title} </dt>
     <dd> {props.data} </dd>
    </>
  );
};

Body.propTypes = {
  title : PropTypes.string.isRequired,
  data : PropTypes.string.isRequired,
}
