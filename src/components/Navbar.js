import React from 'react';


function NavBar({setPage, page}) {


  return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#"></a>
      <nav className="navbar navbar-light bg-light ">
        <form className="form-inline ">
          <a className="btn btn-outline-success m-1" type="button" href="#About" onClick={()=> setPage("AboutMe")}>About Me</a>
          <a className="btn btn-outline-success m-1" type="button" href="#Projects" onClick={()=> setPage("Projects")} >Portfolio</a>
          <a className="btn btn-outline-success m-1" type="button" href="#Contact" onClick={()=> setPage("Contact")}>Contact</a>
          <a className="btn btn-outline-success m-1" type="button" href="https://docs.google.com/document/d/1oboNeHH7aBcOYIe740vDUFEUADeVeUhsCn5Ex3AsFJk/edit?usp=sharing">Resume</a>
        </form>
      </nav>
    </div>
  </nav>
}

export default NavBar