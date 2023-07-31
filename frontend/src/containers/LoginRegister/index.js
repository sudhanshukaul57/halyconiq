import React, { useState } from "react";
import logo from './logo.svg';
import './style.css';
import { Login } from "./Login";
import { Register } from "./Register";

function LoginRegister(props) {
  let setSession = props.setSession
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="LoginRegister">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} setSession={setSession}/> : <Register onFormSwitch={toggleForm} setSession={setSession}/>
      }
    </div>
  );
}

export default LoginRegister;
