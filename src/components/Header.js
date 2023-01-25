import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div style= {{color: "black"}}>
      <nav className="navbar is-centered">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/thundernunder?tab=repositoriess"
          >
            <span className="content is-large" >
              <div style = {{ color: "black", textShadow: "2px 2px 4px #8797AF"}} >
              Nathan Underwood
              </div>
            </span>
          </a>
        </div>
      </nav>
    
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;