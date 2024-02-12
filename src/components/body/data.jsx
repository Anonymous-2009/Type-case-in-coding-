import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './data.css'

export default function Body(){
  const [data, setData] = useState([{
  title: 'camelcase',
  description:'capitalizing words without spaces for readability in programming'
},{
  title: 'traincase',
  description:'separating words with underscores to improve readability in programming conventions'
},{
  title: 'pascalcase',
  description:'cpitalizing words without spaces for improved programming clarity'
},{
  title: 'snakecase',
  description:'Joining words with hyphens for clear naming in programming styles'
},{
  title: 'kebabcase',
  description:'Joining words with hyphens for clear naming in programming styles'
}]
);
  return (
    <>
      {data.map((props) => {
       return (
         <> 
        <div class='data'>
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

 


