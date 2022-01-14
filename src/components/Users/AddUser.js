<<<<<<< HEAD
import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
=======
import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
    {
        setError({
            title:'Invalid input',
            message:'Please enter a valid name and age(non-empty values)'
        }

        )
        return;
    }
    if(+enteredAge<1)
    {
        setError({
            title:'Invalid age',
            message:'Please enter a valid  age(>0)'
        });
        return;
    }
    props.onAddUser(enteredUserName,enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>
  {
      setError(null);
  }

  return (
      <div>
          
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        ></input>
        <label htmlFor="age" >
          Age (Years)
        </label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
        <Button type="submit">Add User</Button>
      </form>
      <ul>

      </ul>
    </Card>
=======
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
>>>>>>> 4cfa410 (initial commit of deep dive concepts)
    </div>
  );
};

export default AddUser;
