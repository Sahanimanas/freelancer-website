import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import socketIoClient from 'socket.io-client';

export const GeneralContext = createContext();

const GeneralContextProvider = ({children}) => {

  const WS = 'http://localhost:6001';

  const socket = socketIoClient(WS);


  const navigate = useNavigate();
const [isloggedin,setIsloggedin]  =  useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');
 
  
  
  
  const login = async () =>{
    try{
      const loginInputs = {email, password}
        await axios.post(`${import.meta.env.VITE_API_URL}/login`, loginInputs)
        .then( async (res)=>{

          localStorage.setItem('userId', res.data._id);
            localStorage.setItem('usertype', res.data.usertype);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);
            setIsloggedin(true)
            if(res.data.usertype === 'freelancer'){
                navigate('/freelancer');
            } else if(res.data.usertype === 'client'){
              navigate('/client');
            } else if(res.data.usertype === 'admin'){
                navigate('/admin');
            }
          }).catch((err) =>{
            alert("login failed!!");
            console.log(err);
          });
          
        }catch(err){
          console.log(err);
        }
      }
      
  const inputs = {username, email, usertype, password};

  const register = async () =>{
    try{
        await axios.post(`${import.meta.env.VITE_API_URL}/register`, inputs)
        .then( async (res)=>{
            localStorage.setItem('userId', res.data._id);
            localStorage.setItem('usertype', res.data.usertype);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);
            setIsloggedin(true)
            if(res.data.usertype === 'freelancer'){
              navigate('/freelancer');
          } else if(res.data.usertype === 'client'){
            navigate('/client');
          } else if(res.data.usertype === 'admin'){
              navigate('/admin');
          }
 
        }).catch((err) =>{
            alert("registration failed!!");
            console.log(err);
        });
    }catch(err){
        console.log(err);
    }
  }


  const logout = async () =>{
    
    localStorage.clear();
    setIsloggedin(false)
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorage.removeItem(key);
      }
    }
    
    navigate('/');
  }


  return (
    <GeneralContext.Provider value={{socket,setIsloggedin,isloggedin ,login, register, logout, username, setUsername, email, setEmail, password, setPassword, usertype, setUsertype}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider