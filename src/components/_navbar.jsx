import React from 'react'

function _navbar(props) {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">Logo</div>
        <ul className="nav-menu">
          <li className="nav-menu-item text-center active text">
            <a href="#.">Home</a>
          </li>
          <li className="nav-menu-item text-center">
            <a href="#.">Page 1</a>
          </li>
          <li className="nav-menu-item text-center">
            <a href="#.">Page 2</a>
          </li>
          <li className="nav-menu-item text-center">
            <a href="#.">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default _navbar
