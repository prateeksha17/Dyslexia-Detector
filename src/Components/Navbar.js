import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
          
   
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <Link to="/home" className="navbar-brand d-flex align-items-center">
            <h1 className="m-0">Dyslexia Detection</h1>
        </Link>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/home" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/tests" className="nav-item nav-link">Tests</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                            <Link to='/gallery' className="dropdown-item">Gallery</Link>
                            <Link to='/feature' className="dropdown-item">Features</Link>
                            <Link to='/team' className="dropdown-item">Our Team</Link>                            
                         
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="border-start ps-4 d-none d-lg-block">
                <button type="button" className="btn btn-sm p-0"><i className="fa fa-search"></i></button>
            </div>
        </div>
    </nav>
    </div>
  )
}
