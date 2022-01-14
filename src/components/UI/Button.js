<<<<<<< HEAD
import React from "react";

import classes from './Button.module.css'

const Button=(props)=>{

    return <button className={classes.button} type={props.type||'button'} onClick={props.onClick}>
        {props.children}

    </button>

}

export default Button;
=======
import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
