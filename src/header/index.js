import React from 'react';
import styles from '@/styles/Header.module.css'; // Impor file CSS eksternal

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Logo Situs</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/about">Tentang</a></li>
          <li><a href="/kontak">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;