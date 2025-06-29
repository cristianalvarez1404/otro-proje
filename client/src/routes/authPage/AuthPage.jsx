import React, { useState } from "react";
import "./authPage.css";
import Image from "../../components/image/Image";
import apiRequest from "../../utils/apiRequest";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData)
    
    try {
      const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"} `,data)
      console.log(res.data)
    }catch(err){
      setError(err.response.data.message)
    }

  }

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" w={36} h={36} alt="" />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="text"
                placeholder="name"
                name="displayName"
                id="displayName"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                required
              />
            </div>
            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do have an account? <small>Login</small>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                required
              />
            </div>
            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Dont have an account? <small>Register</small>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
