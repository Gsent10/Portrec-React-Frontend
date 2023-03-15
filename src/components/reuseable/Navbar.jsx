import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light p-3 border-bottom border-top">
        <Link className="navbar-brand" to="/">Dashboard</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/wards">Wards</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/lga">LGA</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/upload">Upload Result</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar