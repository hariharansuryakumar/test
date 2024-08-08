import React from 'react'

function Menubar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-dark p-3">
  <a className="navbar-brand" href="#">Great gas</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/register">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Login</a>
      </li>
    </ul>
  </div>
</nav>    
</div>
  )
}

export default Menubar