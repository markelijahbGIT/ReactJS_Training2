import "./App.css";

import React, { Component, useState , useEffect, createContext, useContext  } from 'react';



import { createRoot } from "react-dom/client";
import {
 createBrowserRouter,
 RouterProvider,
 Route,
 Link,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import Locations from "./pages/Locations"


export const rootContext = createContext([]);

function App() {
    

  //const [user, setUser] = useState('asd')
  const [ user, setUser ] = useState('user');
  const [title, setTitle] = useState('title_value')

  const [username, setUsername] = useState(''); //[variablename, function to update value -"State"]
  const [password, setPassword] = useState('');



    const router = createBrowserRouter([ // routes to navigate throu
    // {
    //     path: "*",
    //     element: <Navigate to='/' />
    //     },
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/Dashboard",
        element: <Dashboard />,
        children:[{
            path: 'Users',
            element: <Users />,
        },{

            path: 'Locations',
            element: <Locations />,
        }
            
        ]
        },
   ]);
   
   return <rootContext.Provider value={{user,setUser, title, setTitle , username, setUsername, password, setPassword }}>
              <RouterProvider router={router} />
          </rootContext.Provider>
   

}


export default App;