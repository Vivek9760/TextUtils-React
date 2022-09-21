import React from 'react'
// import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  // function dark(){props.toggleMode("dark");}
  // function light(){ props.toggleMode('light');}
  // function primary(){ props.toggleMode('primary');}
  
    return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a> */}
          <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
          {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-secondary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
<div className="form-check form-switch display-vivek container-fluid my-3 ">
  <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode==="light"?"info":"primary"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==="light"?" dark ":" light "} Mode</label>
</div>
  </nav>
  {/* <div className="display-vivek container-fluid my-3 ">
  <button type="button" onClick={light} className="btn btn-light">Light</button>
  <button type="button" onClick={dark} className="btn btn-dark">Dark</button>
  <button type="button" onClick={primary} className="btn btn-primary">Primary</button>
  </div>  */}

   </>
  )
}

// Navbar.propTypes={
//     title: PropTypes.string
// };

Navbar.defaultProps = {
title:"Set this please",
aboutText:"Set anything here"
};

