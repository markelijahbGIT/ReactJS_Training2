import React, { Component, useState , useEffect  } from 'react';
import { useNavigate } from "react-router-dom";
import {useContext} from 'react';

import{rootContext} from '../App';


export default function Login(){
    

    // const [username, setUsername] = useState(''); //[variablename, function to update value -"State"]
    // const [password, setPassword] = useState('');

    const { username, setUsername, password, setPassword} = useContext(rootContext)
    

    const [userNameError, setUserNameError] = useState(false);

    const [lostFocus, setlostFocus] = useState(false);

    const [loggedin, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false)
    

    const bawalSaName =/^[@]*$/; // regex for alphanumeric only
    const DisplayError = ()=>{
        return(
            
            <h1>Name Error</h1>
    
        )
    }

    const navigate = useNavigate();

    const myName = 'Mark Elijah';

    const handleSignIn = (event)=>{
        event.preventDefault();
        setLoading(true);  //change isLoading variable with false
        setTimeout(()=>{
        setLoading(false);
        setLoggedIn(true);
        navigate("/Dashboard")
    }, 5000);
        
        
    }

    const ShowLoading = ()=>{

        return(
            <h1>Loading</h1>

        )
    }


    useEffect(() => {
        // condition for fullName
        
        if(username !=="" && (username.length > 10 || !username.includes('@')  )){
            setUserNameError(true)
        }else{
            setUserNameError(false)
        }
      }, [lostFocus]);

    
return(
<div className="container mx-auto ">
    <div className="flex justify-center items-center bg-emerald-200  h-64   max-w-sm mx-auto">
        {/* <h2 className="flex justify-center ... h-screen items-center">{`hello you ${myName}`}</h2> */}

        <form>
            <div>
                    <div className="items-center">
                        
                        {/* <input type="email" value={username}  /> */}
                        <label className="relative block">
                        <label>Email:</label>
                        <input value={username} 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  
                        type="text" 
                        onChange={(event)=>setUsername(event.target.value)}
                        onBlur={(event)=>setlostFocus(true)}
                        onClick={(event)=>setlostFocus(false)}/>
                        
                        </label>
                    </div>
                    {userNameError && <DisplayError />}
                    <div>
                    <label className="relative block">
                    <label>Password:</label>
                        <input type="password" 
                        value={password} 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        onChange={(event)=>setPassword(event.target.value)}/>
                        </label>
                    </div>
            </div>
                <button 
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                type="submit"
                onClick={handleSignIn}>login</button>
                {isLoading && <ShowLoading />}
                </form>
                

    </div>

    
</div>
)
}