import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './data.css'

export default function Body(){
 
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch(' https://f6717121640e4a468d11f3fa642f05ea.api.mockbin.io/');
    const response = await result.json();
    setData(response);
    console.log(result);
    console.log(setData);
}
  
    useEffect(() => {
      fetchData();
    },[]);
  
  return (
    <>
      {data.map((props) => {
       return (
         <> 
        <div className='data' key={props.title}>
         <p> {props.title} </p>
         <p> {props.description}</p>
        </div>
         </>
       )
       })}
    </>
  );
};

Body.propTypes = {
  title : PropTypes.string.isRequired,
  data : PropTypes.string.isRequired,
}

Body.defaultProps = {
  title : 'title add soon',
  data : 'data add soon ',
}

 


