"use client";

import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    { name: "Cliente 1", feedback: "Ótimo trabalho! Super recomendo." },
    { name: "Cliente 2", feedback: "Profissionalismo incrível." },
    { name: "Cliente 3", feedback: "Entrega no prazo e qualidade excelente." },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>Depoimentos</h2>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p>{testimonial.feedback}</p>
            <span>- {testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
