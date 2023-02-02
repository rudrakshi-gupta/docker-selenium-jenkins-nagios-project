import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

function App() {
  return (
    <div className="Volunteer">
      <nav className="navbar bg-dark sticky-top">
        <img
          src="https://www.pngkey.com/png/full/247-2479287_nss-logo-national-service-scheme-logo-png.png"
          className="logo"
          alt="..."
        ></img>
        <img
          src="https://www.pngkit.com/png/full/44-443370_white-person-icon-png.png"
          className="image"
          alt="..."
        ></img>
        <h1>Hello NSS Volunteers!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </nav>

      <main id='main'>
        <Search />
      </main>
    </div>
  );
}

export default App;
