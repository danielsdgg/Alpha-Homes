import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
   
      username:username,
      email: email,
      password: password,
      role : "client"
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), 
    })
      .then((r) => {
        if (r.ok) {
          // alert("Sign up Successful. You can now login");
          history("/login"); 
          return r.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Response:", error.response);
      });
  };

  return (
    <div className="auth-form">
      <h1 className="text-center font-extrabold md:text-2xl sm:text-1xl">SIGN UP</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">user name</label>
        <input
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Enter username"
        />
         <label htmlFor="email">Email Address</label>
         <input
           value={email}
           name="email"
          onChange={(e) => setEmail(e.target.value)}           id="email"
           placeholder="myemail@gmail.com"
         />

<label htmlFor="password">Password</label>
         <input
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           type="password"
           id="password"
           placeholder="Enter password"
           name="password"
         />
        <button
          className="bg-[orangered] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black hover:bg-green-300"
          type="submit"
        >
          Register
        </button>
      </form>
      <Link to={"/login"}>Already have an account? Login here</Link>
    </div>
  );
}

export default Register;