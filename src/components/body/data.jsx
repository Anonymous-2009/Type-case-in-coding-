import React from 'react';

export default function body(props){
  return (
    <>
     <dt> {props.title} </dt>
     <dd> {props.data} </dd>
    </>
  );
};
