import React from 'react'
import './Static/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light mx-4">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src='/img/logo.png' alt='logo' width="100%" height="40vh"/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">Overview</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="price">Price Plan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="gallery">Gallery</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Amenities</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Floor Plan</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Location</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#"><i class="fa-solid fa-phone"></i> +91 9784645353</Link>
        </li>        
      </ul>      
    </div>
  </div>
</nav>     
    </>
  )
}

export default Navbar