"use client";

import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1", image: "/assets/project1.png" },
    { title: "Projeto 2", description: "Descrição do projeto 2", image: "/assets/project2.png" },
    { title: "Projeto 3", description: "Descrição do projeto 3", image: "/assets/project3.png" },
  ];

  return (
    <section className={styles.portfolio}>
      <h2>Portfólio</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
