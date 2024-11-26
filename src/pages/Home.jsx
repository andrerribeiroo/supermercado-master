import React from "react";
import CardProduto from "../components/CardProduto";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const url = "http://localhost:5000/produtos"

// Estado inicial do formulário

const Home = () => {

  const [cads, setCads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(url);
        const cads = await req.json();
        setCads(cads);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{ height: "200vh", background: "gray"}}>
      <NavBarra />
      <h1 style={{ margin: "50px", color: "black" }}>Lista de produtos</h1>
      <div className="container">
        <div className="lista-produtos d-flex gap-3 mt-3 justify-content-start flex-wrap col-12">
          {cads.map((prod) => (
            <CardProduto
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              categoria={prod.categoria}
              imagemUrl={prod.imagemUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
