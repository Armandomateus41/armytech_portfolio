// src/components/Header/Header.tsx
"use client";

import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="">ArmyTech</a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#projects">Projetos</a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills">Habilidades</a>
          </li>
          <li className={styles.navItem}>
            <a href="#experience">Experiência</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
