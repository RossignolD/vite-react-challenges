import React, { useState } from "react";
import { Link } from "react-router";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>
        BlogApp
      </Link>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/blog" onClick={toggleMobileMenu}>
            Blog
          </Link>
          <Link to="/about" onClick={toggleMobileMenu}>
            About
          </Link>
        </div>
      )}

      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};
export default NavBar;
