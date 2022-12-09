import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './login.css'
const Login = () => {
  
  const [logdata,setData] = useState({
    username:"",
    password:""
})


const addData = (e)=>{
    // console.log(e.target);
    const {name,value} = e.target;
    setData(()=>{
        return{
            ...logdata,
            [name]:value
        }
            
    })
}

async function login(){
  await axios
      .post(`/signin`, {
        username: logdata.username,
        password: logdata.password
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("userId",response.data.data[0]._id)
        window.location.href = "/";
      });
}


  return (
    <div>
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Log In</h2>
      <div class="input-group">
        <input type="text" name="username" id="loginUser" onChange={addData} value={logdata.username} />
        <label for="loginUser">User Name</label>
      </div>
      <div class="input-group">
        <input
          type="password"
          name="password"
          id="loginPassword"
          onChange={addData} value={logdata.password}
          required
        />
        <label for="loginPassword">Password</label>
      </div>
<Input type="submit" value="Log In" class="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);
login()}}/>
    </form>
  </div>
    </div>
  )
}

export default Login
