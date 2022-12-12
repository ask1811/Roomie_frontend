import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './signup.css'
import Footer from '../../components/Footer/footer';

const baseURL = "https://localhost:8000"

const Signup = () => {
  
  const [logdata,setData] = useState({
    name:"",
    email:"",
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
        email: logdata.email,
        password: logdata.password
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token",response.data.token);
        window.location.href = "/";
      });
}


  return (
    <>
    <div className='whole'>
    <div className="content">
    <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />    
    <form action="" className="form">
      <h2>Sign Up</h2>
      <div class="input-group">
        <input type="text" name="name" id="loginUser" onChange={addData} value={logdata.name} />
        <label for="User">Name</label>
      </div>
      <div class="input-group">
        <input type="text" name="email" id="loginUser" onChange={addData} value={logdata.email} />
<<<<<<< HEAD
        <label for="loginUser">E mail</label>
=======
        <label for="loginUser">E-mail</label>
>>>>>>> 6027da09d98e0c0a0974ab55c64b5513bb4220ad
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
          required
        />
        <label for="loginPassword">Confirm Password</label>
<<<<<<< HEAD
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
    (user==="Owner")&&<button type="submit" className="submit-btn"   onClick={()=>{
      window.location.href="/landing-page"
    }}>Login</button>
   }
   {
    (user==="Tenant")&&<button type="submit"  className="submit-btn"   onClick={()=>{
      window.location.href="/tlanding-page"
  
    }}>Login</button>
}
      </form>
=======
      </div>
<Input type="submit" value="Sign Up" className="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);}}/>
    </form>
>>>>>>> 6027da09d98e0c0a0974ab55c64b5513bb4220ad
  </div>
    </div>
    </>
  )
}

export default Signup
