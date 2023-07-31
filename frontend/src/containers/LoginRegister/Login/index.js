import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  let setSession = props.setSession;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userType, setUserType] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setSession(true);
    history.push("/");
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="user-type">User Type</label>
        <div className="select-container">
          <select
            id="user-type"
            name="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button type="submit" className="button-test">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
}
