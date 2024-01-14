'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const searchInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.ctrlKey && event.code === 'KeyM') {
        searchInputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleShortcut);

    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, []);


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
          <li> <Link className={styles.link} href="/"> Home </Link> </li>
          <li> <Link className={styles.link} href="/pages/about"> About </Link> </li>
          <li> <Link className={styles.link} href="/pages/team"> Team </Link> </li>
          <li> <Link className={styles.link} href="/pages/contact"> Contact </Link> </li>
          {isAuthenticated && (
            <li>
              <Link className={styles.link} href="/pages/write">
                Write
              </Link>
            </li>
          )}
          <li>
            <Link className={styles.link} href="/pages/login">
              {isAuthenticated ? (
                <button onClick={() => signOut()} style={{ all: 'unset' }}>Logout</button>
              ) : (
                'Login'
              )}
            </Link>
          </li>
        </ul>
        {isAuthenticated && session?.user?.image && (
          <img src={session.user.image} alt="User" className={styles.userImage} />
        )}
      </nav>
    </main>
  );
}
