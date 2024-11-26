import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 André Ramos Ribeiro. Todos os direitos reservados.</p>
        <nav style={styles.nav}>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" style={styles.link}>
            LinkedIn
          </a>
          <a href="/contato" style={styles.link}>
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    position: "fixed", // Fixar na posição
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center",
    zIndex: 1000, // Garante que o footer estará acima de outros elementos
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    margin: "0",
    fontSize: "14px",
  },
  nav: {
    marginTop: "10px",
  },
  link: {
    margin: "0 10px",
    color: "#1e90ff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
