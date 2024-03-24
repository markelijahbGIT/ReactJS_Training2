
import React, { Component, useState , useEffect  } from 'react';


function App(){


    const [loggedin, setLoggedIn] = useState(false); //declare page variable with 'login'
    const [isLoading, setLoading] = useState(false)

    const [username, setUsername] = useState(''); //[variablename, function to update value -"State"]
    const [password, setPassword] = useState('');

    console.log(username)


    const ShowLoading = ()=>{


        return(
            <h1>Loading</h1>

        )
    }

    const ShowDashboard = ()=>{
        return(
            <h1>Dashboard</h1>
        )
    }

    const handleChange =(event)=> {
        event.preventDefault();
        setLoading(true);  //change isLoading variable with false
        setTimeout(()=>{
        setLoading(false);
        setLoggedIn(true);
    }, 3000);
}; 
     useEffect(() => {
    //     console.log(isLoading)
         if(loggedin){
            setLoggedIn('/dashboard');
       }
    },[loggedin]); //use effect runs every change in loggedin variable

    return(
        <div>
            {!loggedin && !isLoading && (
                <form onSubmit = {handleChange}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={username} onChange={(event)=>setUsername(event.target.value)} />
                    </div>
                    <div>
                        <label>password:</label>
                        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                    </div>

                <button type="submit">login</button>

                </form>


            )
            
            }
            {isLoading && <ShowLoading />

            }
            {loggedin && <ShowDashboard />

}


        </div>
    )
}


export default App;