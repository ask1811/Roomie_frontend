import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './signup.css'
const baseURL = "https://localhost:3000"

const Signup = () => {
  
  const [logdata,setData] = useState({
    name:"",
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

async function signup(){
  await axios
  .post(`${baseURL}/signup`, {
  name: logdata.name,
        username: logdata.username,
        password: logdata.password
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        window.location.href = "/";
      });
}


  return (
    <div>
    <div class="login-wrapper">
    <form action="" class="form">
      <h2>Sign Up</h2>
      <div class="input-group">
        <input type="text" name="name" id="loginUser" onChange={addData} value={logdata.name} />
        <label for="User">Name</label>
      </div>
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
      <div class="input-group">
        <input
          type="password"
          name="password"
          id="loginPassword"
          onChange={addData} value={logdata.password}
          required
        />
        <label for="loginPassword">Confirm Password</label>
      </div>
<Input type="submit" value="Sign Up" class="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);
signup()}}/>
    </form>
  </div>
    </div>
  )
}

export default Signup
