import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/svg/legash_logo.png";
import '../style/SignIn.css';


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform sign-up logic with name, email and password
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signup">
      <Link to="/">
        <img src={Logo} width={250} alt="logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign in here</Link>.
      </p>
    </div>
  );
}

export default SignUp;
