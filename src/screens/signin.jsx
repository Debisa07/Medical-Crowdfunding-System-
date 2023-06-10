import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/svg/legash_logo.png";
import '../style/SignIn.css';
import { useTranslation, Trans, I18nextProvider } from 'react-i18next';
import i18n from '..//i18n/i18n';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic with email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} width={250} alt="logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button type="submit">{t("Log in")}</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
   </div>
   
  );
}
export default Login;
