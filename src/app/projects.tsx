// src/pages/projects.tsx
import React from "react";
import styles from "./projects.module.css";

const projects = [
  { title: "Projeto 1", description: "Descrição do projeto 1" },
  { title: "Projeto 2", description: "Descrição do projeto 2" },
  { title: "Projeto 3", description: "Descrição do projeto 3" },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
