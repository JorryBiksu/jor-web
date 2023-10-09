// components/Header.js

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    // Mengambil konten header eksternal menggunakan fetch
    fetch('/path/ke/header.txt') // Ganti dengan path yang sesuai
      .then(response => response.text())
      .then(text => setHeaderText(text))
      .catch(error => console.error('Gagal mengambil header:', error));
  }, []);

  return (
    <header>
      {/* Menampilkan konten header yang diambil dari file eksternal */}
      <div dangerouslySetInnerHTML={{ __html: headerText }} />
    </header>
  );
};

export default Header;