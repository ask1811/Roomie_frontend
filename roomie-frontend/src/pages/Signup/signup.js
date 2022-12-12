import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './signup.css'
import Footer from '../../components/Footer/footer';


const Signup = () => {
  
  const [logdata,setData] = useState({
    name:"",
    email:"",
    password:""
})
const [user,setUser]=useState("")

const baseURL = "http://localhost:8000"


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

async function tenantsignup(){
  await axios.post(`${baseURL}/tenant/register`, {
        Name: logdata.name,
        Email: logdata.email,
        Password: logdata.password
      })
      .then((response) => {
        console.log(response.data.message);
        if(response.data.message=="Tenant registeration successful"){
          console.log("test");
          window.location.href = "/login";
        }
      });
}

async function ownersignup(){
  await axios.post(`${baseURL}/owner/register`, {
        Name: logdata.name,
        Email: logdata.email,
        Password: logdata.password
      })
      .then((response) => {
        console.log(response.data.message);
        if(response.data.message=="Owner registeration successful"){
          console.log("test");
          window.location.href = "/login";
        }
      });
}

  return (
    
    <div className='whole'>
    <div className="content">
    <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />    
    <form action="" className="form">
      <h2>Sign Up</h2>
      <div class="input-group">
        <input type="text" name="name" id="loginName" onChange={addData} value={logdata.name} />
        <label for="User">Name</label>
      </div>
      <div class="input-group">
        <input type="text" name="email" id="loginUser" onChange={addData} value={logdata.email} />
        <label for="loginUser">E-mail</label>
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
          name="confirmpassword"
          id="loginconfirmPassword"
          required
        />
        <label for="loginPassword">Confirm Password</label>
        </div>
        <p>Please select user</p>
        <input type="radio" id="owner" name="user" value="Owner" onChange={()=>{
          setUser("Owner")
        }}/>
  <label for="owner">Owner</label>
   <input type="radio" id="tenant" name="user" value="Tenant" onChange={()=>{
    setUser("Tenant")}}/>
   <label for="tenant">Tenant</label>
   {
    (user==="Owner")&&<button type="submit" className="submit-btn"   onClick={(e)=>{
      e.preventDefault();
      ownersignup();
    }}>Signup</button>
   }
   {
    (user==="Tenant")&&<button type="submit"  className="submit-btn"   onClick={(e)=>{
      e.preventDefault();
      tenantsignup();
  
    }}>Signup</button>
}
      </form>
      </div>
      </div>
  
    
  )
}

export default Signup
