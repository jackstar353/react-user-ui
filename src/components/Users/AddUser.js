import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState('')
    const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge)
  };

  const usernameChangeHandler =(event) =>{
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler =(event) =>{
    setEnteredAge(event.target.value)
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlfor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}></input>
        <label htmlfor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
