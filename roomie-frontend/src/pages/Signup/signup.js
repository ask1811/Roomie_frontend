import React from 'react'

const signup = () => {
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
        <label for="loginconfirmPassword">Confirm Password</label>
      </div>
<Input type="submit" value="Sign Up" class="submit-btn" onClick={(e)=>{e.preventDefault();
console.log(logdata);
signup()}}/>
    </form>
  </div>
    </div>
  )
}

export default signup
