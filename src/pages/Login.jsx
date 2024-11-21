import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Login = () => (
  <div
    style={{
      background: "black",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Container
      style={{
        background: "white",
        padding: "0",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* Coluna da Imagem */}
      <div style={{ flex: 1 }}>
        <img
          src="LogoLogin.png" // Substitua pelo link da sua imagem de supermercado
          alt="Supermercado"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Coluna do Formulário */}
      <div
        style={{
          flex: 1,
          padding: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "black" }}>Seja Bem-Vindo</h1>
        <h3 style={{ marginBottom: "30px", color: "black" }}>Fazer Login</h3>

        <span style={{fontSize: "100px" , color:"black" , margin: "20px"}} className="material-symbols-outlined">account_circle</span>

        {/* Caixinha de Email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            style={{ width: "100%", marginRight: "250px" }}
          />
        </FloatingLabel>

        {/* Caixinha de Senha */}
        <FloatingLabel
          controlId="floatingPassword"
          label="Senha"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "100%", marginRight: "250px" }}
          />
        </FloatingLabel>

        {/* Botão Entrar */}
        
        <Button style={{ marginTop: "20px", width: "30%" }} variant="success" href="/home"> Entrar na Conta </Button>
      </div>
    </Container>
  </div>
);

export default Login;
