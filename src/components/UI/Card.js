<<<<<<< HEAD
import React from "react";

import classes from './Card.module.css'

const Card=(props)=>{
return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
=======
import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
