import React, { useState } from "react";
import Login from './login';
import SignupForm from "./singup";

function App(){
  const [currentForm, setCurrentForm]=useState('login');

  const toggleform=(formName)=>{
    setCurrentForm(formName);
  }
  return(
    <div>
      { currentForm ==='login' ? <Login onFormSwitch={toggleform}/> : <SignupForm onFormSwitch={toggleform}
      />}
    </div>

  )

}
export default App;