import React, { useState } from 'react'
//import axios from "axios";
import { Input } from 'reactstrap'
import './login.css'
import Footer from '../../components/Footer/footer';


 const Login = () => {
  
//   const [logdata,setData] = useState({
//     username:"",
//     password:""
// })


// const addData = (e)=>{
//     // console.log(e.target);
//     const {name,value} = e.target;
//     setData(()=>{
//         return{
//             ...logdata,
//             [name]:value
//         }
            
//     })
// }

// async function login(){
//   await axios
//   .post(`${baseURL}/login`, {
//     username: logdata.username,
//         password: logdata.password
//       })
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("token",response.data.token);
//         localStorage.setItem("userId",response.data.data[0]._id)
//         window.location.href = "/";
//       });
// }


  return (
    <>
    <div className="content">
    <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />
    <form action="" class="form">
      <h2>Log In</h2>
      <div className="input-group">
        <input type="text" name="email" id="loginUser"  />
        <label for="loginUser">E-mail</label>
      </div>
      <div className="input-group">
        <input
          type="password"
          name="password"
          id="loginPassword"
          required
        />
        <label for="loginPassword">Password</label>
      </div>
      <p>Please select user</p>
      <input type="radio" id="owner" name="user" value="Owner"/>
<label for="owner">Owner</label>
 <input type="radio" id="tenant" name="user" value="Tenant"/>
 <label for="tenant">Tenant</label>
<Input type="submit" value="Log In" className="submit-btn"/>
</form>

<a id='sig' href="/signup" target="_self">Click here to signup</a>

    
    </div>
</>
  )
}

export default Login;
