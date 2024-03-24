import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  
  //const fullName = "10 chars & no characters or numbers";
  //const age = "No alpha"

  const bawalSaName =/^[A-Za-z\s]*$/; // regex for alphanumeric only
  const bawalSaAge = /^[0-9]+$/; // regex for alphanumeric only

  useEffect(() => {
    // condition for fullName
    //console.log(fullName.match(bawal))
    if(fullName !=="" && (fullName.length > 10 || !bawalSaName.test(fullName)) ){
        setFullNameError(true)
    }else{
        setFullNameError(false)
    }
  }, [fullName]);


  useEffect(() => {
    // condition for age
    if(age !=="" && !age.match(bawalSaAge)){
        setAgeError(true) 
    }else{
        setAgeError(false) 
    }
    console.log(ageError)


  }, [age]);

  const handleChangeName = (e) => {
    setFullName(e.target.value);
  }

  const handleAge = (e)=>{
    setAge(e.target.value)

  }
  const DisplayError = ()=>{
    return(
        <h1>Name Error</h1>

    )
}

const DisplayAgeError = ()=>{
    return(
        <h1>Age Error</h1>

    )
}

  return (
    <div>
      <h2>Login</h2>
      <div>
        <div>
          <input
            name="fullName"
            placeholder="Full name"
            onChange={handleChangeName}
          />
        </div>
        {fullNameError && <DisplayError />}
        

        <div>
        <input
            name="age"
            placeholder=""
            onChange={handleAge}
          />
        </div>
        {ageError && <DisplayAgeError />}
        
      </div>
    </div>
  );
}

export default App;
