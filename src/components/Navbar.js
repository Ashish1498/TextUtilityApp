import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode ==='light'?'dark':'light'}`} href="#">{props.title}</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
        <li className="nav-item my-2 mx-2">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <div class={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input class="form-check-input" onClick={props.greenToggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
        </div>
        </li>
      </ul>
      <div class={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired  //makes it mandatory to have a value
}

//If we dont pass props value then these default values will be used
Navbar.defaultProps = {
    title: 'Set Title here'
}
