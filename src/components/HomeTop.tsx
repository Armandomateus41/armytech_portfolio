// src/components/HomeTop/HomeTop.tsx
"use client";

import React from "react";
import styles from "./HomeTop.module.css";

const HomeTop = () => {
  return (
    <section className={styles.homeTop}>
      <div className={styles.content}>
        <h1 className={styles.title}>Eleve Suas Ideias</h1>
        <p className={styles.subtitle}>
          Transforme suas ideias em soluções digitais impactantes. Especialista
          em desenvolvimento web e interfaces modernas.
        </p>
        <div className={styles.buttons}>
          <a href="#projects" className={styles.buttonPrimary}>
            Veja meus projetos
          </a>
          <a href="#contact" className={styles.buttonSecondary}>
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
