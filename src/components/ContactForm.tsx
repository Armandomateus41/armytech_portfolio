"use client";

import styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <h2>Entre em Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
