import React from "react";

import '../hetmystyle.css';
export default function Navbar(){

return(
<>

<nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
  <a class="navbar-brand pt-5 text-primary" href="#">HETALI</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav  text pt-4 px-5 text-center">
        <a className="nav-link active px-4" href="#">ABOUTUS</a>
        <a className="nav-link active px-4" href="#">CONTACTUS</a>
        <a className="nav-link active px-4" href="#">PROJECTS</a>
        <a className="nav-link active px-4" href="#">DIVERSIFICATION</a>
        <a className="nav-link active px-4" href="#">OUR PROCESS</a>
        <a className="nav-link active px-4" href="#">TESTIMONIALS</a>
        <a className="nav-link active px-4" href="#">CARRERS</a>
        <a className="nav-link active px-4" href="#">CONTACT US</a>
      </div>
    </div>
  </div>
</nav>

</>



)


}