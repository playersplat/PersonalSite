import * as React from "react";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <header style={{ 
      background: 'var(--color-code-bg)', 
      padding: 'var(--space-4) 0', 
      margin: 0, // Remove any default margin
      overflow: 'hidden' // Prevent content from overflowing
  }}>
    <nav style={{ 
      width: '100%', // Full width of the header
      padding: '0 var(--size-gutter)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      boxSizing: 'border-box' // Include padding in the element's total width
    }}>
      <Link to="/" style={{ 
          color: 'var(--color-text)', 
          textDecoration: 'none' 
      }}>
        {siteTitle}
      </Link>
      <div>
        <Link to="/page-1" style={{ 
            color: 'var(--color-text)', 
            textDecoration: 'none',
            marginRight: 'var(--space-3)' 
        }}>
          Page 1
        </Link>
        {/* ...other links... */}
      </div>
    </nav>
  </header>
);

export default Header;
