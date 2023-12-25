import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <main className={styles.main}>
      <nav className={styles.headerContainer}>
        {/* Logo */}
          <Link className={styles.logo} href="/">Techy</Link>

        {/* Search */}
        <input type="search" placeholder="Search..." className={styles.searchInput} />

        {/* Navigation */}
        <ul className={styles.navbarLinks}>
          <li><Link className={styles.link} href="/about">About</Link></li>
          <li><Link className={styles.link} href="/team">Team</Link></li>
          <li><Link className={styles.link} href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Techy</h1>
        <img src="/wave.svg" alt="wave" className={styles.wave} />
      </header>
    </main>
  );
}
