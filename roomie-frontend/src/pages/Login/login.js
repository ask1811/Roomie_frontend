import React, { useState } from 'react'
import axios from "axios";
import { Input } from 'reactstrap'
import './login.css'
import Footer from '../../components/Footer/footer';

 const Login = () => {
  
  const [logdata,setData] = useState({
    email:"",
    password:""
})
const [user,setUser]=useState("")
//console.log(user)

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



async function ownerlogin(){
  await axios.post(`${baseURL}/owner/login`, {
        Email: logdata.email,
        Password: logdata.password
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.message=="Login Successful"){
          localStorage.setItem("token","xxx");
          localStorage.setItem("userId",response.data.user[0].Id);
          localStorage.setItem("user",'Owner')
          window.location.href = "/landingpage";
        }
      
        
      }).catch(error=>{console.log(error)})
}

async function tenantlogin(){
  await axios.post(`${baseURL}/tenant/login`, {
        Email: logdata.email,
        Password: logdata.password
      })
      .then((response) => {
        console.log(response.data)
        if(response.data.message=="Login Successful"){
          localStorage.setItem("token","xxx");
          localStorage.setItem("userId",response.data.user[0].Id);
          localStorage.setItem("user",'Tenant');
          window.location.href = "/tlandingpage";
        }
      
        
      }).catch(error=>{console.log(error)})
}




// function usePage(frm, ev) {
//   // get radio button being checked
//   const checkedBtn = document.querySelector('Input[type="radio"][name="owner"]:checked');
//   // was a button checked?
//   if (checkedBtn) {
//       // let user confirm 
//       const result = window.confirm("Owner " + checkedBtn.value + "selected");
//       if (result) {
//           // user confirmed
//           frm.action = checkedBtn.value;
//       } else {
//           // user denied
//           // prevent form from being submitted
//           // let user confirm 
//       const result = window.confirm("Tenant " + checkedBtn.value + "selected");
//       if (result) {
//           // user confirmed
//           frm.action = checkedBtn.value;
//       }
//   } 
// }
// }

// function MM_goToURL() { 
//   var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
//   for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
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
    
    <div className="content">
    <img src='https://www.flatmate.in/home-image.webp' alt='alternate' className='image' />
    <form  name="my" onSubmit="usePage(this,event)"    action="" class="form">
      <h2>Log In</h2>
      <div className="input-group">
        <input type="text" name="email" id="loginUser" onChange={addData} value={logdata.email} />
        <label for="loginUser">E-mail</label>
      </div>
      <div className="input-group">
        <input
          type="password"
          name="password"
          id="loginPassword"
          onChange={addData} value={logdata.password}
          required
        />
        <label for="loginPassword">Password</label>
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
    console.log(logdata.password);
    ownerlogin();
  }}>Login</button>
 }
 {
  (user==="Tenant")&&<button type="submit"  className="submit-btn"   onClick={(e)=>{
    e.preventDefault();
    tenantlogin();

  }}>Login</button>
 }

</form>
<a className ='sig' href="/signup" target="_self">Click here to signup</a>

    
    </div>

  )
}

export default Login;
 