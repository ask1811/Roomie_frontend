import React from 'react'
import './login.css'
const login = () => {
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

export default login
