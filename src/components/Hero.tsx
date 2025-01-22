"use client";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Elevando Ideias a uma Presença Digital Marcante</h1>
        <p>Especialista em criação de sites e experiências digitais únicas.</p>
        <button>Entrar em Contato</button>
      </div>
    </section>
  );
};

export default Hero;
