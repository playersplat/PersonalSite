import * as React from "react";
import { Link } from "gatsby";
import '../components/layout.css'; // Ensure this path is correct

const Header = ({ siteTitle }) => {
  // State to control the animation
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    // Check if the animation has already been played
    const hasAnimated = window.localStorage.getItem('hasAnimated');
    
    if (!hasAnimated) {
      // If not, animate the header and set the flag in local storage
      setShouldAnimate(true);
      window.localStorage.setItem('hasAnimated', 'true');
    }
  }, []);

  return (
    <header className={`header ${shouldAnimate ? "header-slide-in" : ""}`}>
      <nav className="header-nav">
        <Link to="/" className="site-title">
          {siteTitle}
        </Link>
        <div className="nav-links">
          <Link to="/code" className="nav-link">
            Code
          </Link>
        {/* Additional links can be placed here */}
        {/* SVG icons with proper margin for spacing */}
        <a href="https://www.linkedin.com/in/buoybrian/" className="icon-hover" style={{ marginRight: 'var(--space-3)' }}target="_blank" rel="noopener noreferrer">
          {/* SVG for LinkedIn */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='var(--color-text)' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 00-12 0v12h4V14a2 2 0 014 0v6h4V8z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://github.com/playersplat" className="icon-hover" style={{ marginRight: 'var(--space-3)' }}target="_blank" rel="noopener noreferrer">
          {/* SVG for GitHub */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='var(--color-text)' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-1.03-.02-1.88-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.13-4.56-5A3.9 3.9 0 019 7.77 3.62 3.62 0 019.62 6s.63-.2 2.07.77a7.16 7.16 0 013.77 0c1.44-.97 2.07-.77 2.07-.77a3.62 3.62 0 01.62 1.77 3.9 3.9 0 011.06 2.71c0 3.87-2.34 4.75-4.57 5 .36.31.68.93.68 1.87 0 1.35-.01 2.45-.01 2.79 0 .27.18.59.69.49A12 12 0 0022 12C22 6.48 17.52 2 12 2z"></path>
          </svg>
        </a>
        <a href="mailto:bbui3@ucsc.edu" className="icon-hover">
          {/* SVG for Email */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke='var(--color-text)' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16v16H4z"></path>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>
        </a>
        </div>
      </nav>
  </header>
);
};

export default Header;
