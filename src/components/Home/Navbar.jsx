import React from 'react'
import '../../styles/navbar.css'
import {NavLink} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg p-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white fw-bold hover-link font" to="/">STRANGE MUSIC</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-white font" to="/playlist"><strong>Play List</strong></NavLink>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white font" href="#"><strong>Link</strong></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white font" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Dropdown</strong>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item font" href="#">Action</a></li>
                                <li><a className="dropdown-item font" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item font" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="nav-link text-white font" type="submit" style={{ backgroundColor: "#159a9c", color:"white", width: "50%"}}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
