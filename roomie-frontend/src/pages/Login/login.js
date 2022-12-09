import React from 'react'
import './login.css'
const login = () => {
  return (
    <div>
    <div class="login-wrapper">
    <form action="" className="form">
      <h2>Log In</h2>
      <div className="input-group">
        <input type="text" name="username" id="loginUser" onChange={addData} value={logdata.username} />
        <label for="loginUser">User Name</label>
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
<Input type="submit" value="Log In" className="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);
login()}}/>
    </form>
  </div>
    </div>
  )
}

export default login
