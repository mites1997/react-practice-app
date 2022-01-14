<<<<<<< HEAD
import React from "react";
import Card from "../UI/Card";
=======
import React from 'react';

import Card from '../UI/Card';
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
<<<<<<< HEAD
      <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name}({user.age} years old)
        </li>
      ))}
    </ul>
=======
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
    </Card>
  );
};

export default UsersList;
