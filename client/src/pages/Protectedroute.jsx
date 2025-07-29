import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';


export default function Protectedroute() {
const {isloggedin,setIsloggedin} = useContext(GeneralContext);
const user = isloggedin;
console.log(isloggedin)
  return (
      user?<Outlet/>:
      <Navigate to={'/'} />
      

  )
}
