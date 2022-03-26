import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <a className="navbar-brand text-light" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="/"> Home</a>
            </li>
            
            
          </ul>
  
          
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
             <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
      </nav>
    </div>
  );
}