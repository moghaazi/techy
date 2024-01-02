'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const searchInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const isAuthenticated = true;

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.ctrlKey && event.code === 'KeyM') {
        searchInputRef.current.focus();
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('keydown', handleShortcut);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <main className={styles.main}>
      <nav className={styles.headerContainer}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          Techy
        </Link>

        {/* Search (visible on larger screens) */}
        <input
          type="search"
          placeholder="Search... Ctrl+M"
          className={styles.searchInput}
          ref={searchInputRef}
        />

        {/* Hamburger Menu Button */}
        <button className={styles.hamburgerButton} onClick={toggleMenu}>
          {isOpen ? '❌' : '☰'}
        </button>

        <ul className={isOpen ? styles.navbarLinksOpen : styles.navbarLinksClosed}>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/team">
              Team
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link className={styles.link} href="/write">
                Write
              </Link>
            </li>
          )}
          <li>
            <Link className={styles.link} href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>


    </main>
  );
}
