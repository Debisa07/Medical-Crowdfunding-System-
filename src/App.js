import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // import BrowserRouter, Route and Routes from react-router-dom
import Landing from "./screens/Landing.jsx";
import Signin from "./screens/signin.jsx"
import Signup from "./screens/signup.jsx";
import Campain from "./screens/campain.jsx"

// import PageOne from "./screens/PageOne.jsx"; // import your additional screens
export default function App() {
  return (
    <BrowserRouter>
      {/* Wrap the component in BrowserRouter */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Wrap your routes in Routes */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/campain" element={<Campain />} />
        

      </Routes>
    </BrowserRouter>
  );
}
