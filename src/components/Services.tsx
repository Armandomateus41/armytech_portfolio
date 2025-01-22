"use client";

import styles from "./Services.module.css";

const Services = () => {
  const services = [
    { title: "Landing Pages", description: "Criação de páginas de alta conversão." },
    { title: "Lojas Virtuais", description: "E-commerce integrado com soluções modernas." },
    { title: "Sistemas Web", description: "Desenvolvimento de sistemas personalizados." },
  ];

  return (
    <section className={styles.services}>
      <h2>Serviços Prestados</h2>
      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
