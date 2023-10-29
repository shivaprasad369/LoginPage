import React, { useState } from 'react'
import styled from 'styled-components'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
const UL =styled.ul`

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color:#333;

  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #04AA6D;
  }`
export default function NavBar(props) {
 const [login,setLogin] =  useState(true)
 const isLogin=()=>{
    setLogin((login)=>!login)
 }
  return (
    <>
      <UL>
  <li><a className="active" href="#home" onClick={isLogin}>Home</a></li>

   <li style={{float:"right"}}><a className="active" href="#about" onClick={isLogin}>{login?'logout':'Login'}</a></li>
</UL>
{!login && <HomePage/>}
  {login &&  <LoginPage log={login}/>}
    </>

  )
}
