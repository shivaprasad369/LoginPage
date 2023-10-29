import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import HomePage from "./HomePage";

const FormControl=styled.form`
border: 3px solid #f1f1f1;
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  
  /* Avatar image */
  img.avatar {
    width: 14%;
    border-radius: 50%;
  }

  /* Full-width inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .valid{
    color:red;
    border:1px solid red
  }
  /* Set a style for all buttons */
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra style for the cancel button (red) */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  .container {
    padding: 16px;
  }
  
  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
 
`;

export default function LoginPage() {
const [nameValid, setNameValid] = useState(true)
const [passValid, setTPassValid] = useState(true)
const [logout, setLogout] = useState(false)
const [text, setText] = useState("")
const [passText, setPassText] = useState("")
const [loginText,setLoginText]=useState('')
const nameRef=useRef();
const passRef=useRef();
const close=()=>{
    setLogout(true)
    setLoginText("Home Page")
}
const nameHandler=(event)=>{
    if(event.target.value.trim().length<5){
        setText(event.target.value)
        setNameValid(false)
    }else{

        setText(event.target.value)
        setNameValid(true)
      
    }
}
const passHandler=(event)=>{
    if(event.target.value.trim().length<8){
        setPassText(event.target.value)
setTPassValid(false)

    }else{
        setTPassValid(true)
        setPassText(event.target.value)
    
    }
}
let texts;
const submitHandler=(event)=>{
    event.preventDefault();
    alert("Logged In successfully")
    setLoginText("Loged successfull")
    setLogout(true)
    setText('')
    setPassText('')
}
let forms= logout ? <HomePage texts={loginText}/> : (<FormControl onSubmit={submitHandler}className={'modal-content'}>
<div className={'imgcontainer'}>
<img src={"https://www.w3schools.com/howto/img_avatar2.png"} alt="Avatar" className={'avatar'} />
</div>

<div className={'container'}>
<label htmlFor="uname">
    <b>Username</b>
</label>
<input
    type="text"
    placeholder="Enter Username"
    name="uname"
    ref={nameRef}
    onChange={nameHandler}
    className={!nameValid && 'valid'}
    value={text}
    required
/>
<label htmlFor="psw">
    <b>Password</b>
</label>
<input
    type="password"
    placeholder="Enter Password"
    name="psw"
    value={passText}
    ref={passRef}
    className={!passValid && 'valid'}
    required
    onChange={passHandler}
/>
<button type="submit" disabled={!(nameValid && passValid)}>{!(nameValid && passValid)?"Enter all Details":'Login' }</button>
<label>
    <input type="checkbox"  name="remember" /> Remember
    me
</label>
</div>

<div className={'container'} style={{backgroundColor:'#f1f1f1'}}>
<button
    type="button"
    onClick={close}
    className={'cancelbtn'}
>
    Cancel
</button>
<span className={'psw'}>
    Forgotpassword?
</span>
</div>
</FormControl>
)
  return (
    forms
      );
    }
