import React from "react";
import CardProduto from "../components/CardProduto";
import "bootstrap/dist/css/bootstrap.min.css";


// Importação de componentes
import NavBarra from "../components/NavBarra";


const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Shampoo Cr7",
      descricao: "Melhor shampoo do mundo",
      preco: 7.77,
      categoria: "Saúde e beleza",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiGeCC3KhBPz8xa_dcPdPor2D__CuueBzeA&s",
    },
    {
      id: 2,
      nome: "Dolly Guaraná",
      descricao: "O sabor brasileiro",
      preco: 0.99,
      categoria: "Alimentos",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBZMRU96Mx3KWq03iGSKYCtlF5ZfrTQr0fw&s",
    },
    {
      id: 3,
      nome: "Peneira",
      descricao: "Uma peneira, sem mais",
      preco: 2.5,
      categoria: "Utensílios",
      imagemUrl:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div>
      
      <NavBarra />

      <h1 style={{ margin: "50px", color: "black" }}>Lista de produtos</h1>
      <div className="container">
        <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-start flex-wrap">
          {produtos.map((prod) => (
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
