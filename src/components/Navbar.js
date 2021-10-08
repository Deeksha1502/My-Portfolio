import React from 'react'

const Navbar=() =>
{
    return(<div className="NavBar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button 
    class="navbar-toggler"
     type="button" 
     data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarSupportedContent" aria-expanded="false" 
     aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#container1">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#Link">Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#design">Design</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contact</a>
        </li>
       
        
   
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    )
}
export default  Navbar;