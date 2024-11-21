import React from "react";
import CardProduto from "../components/CardProduto";
import "bootstrap/dist/css/bootstrap.min.css";

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
        "https://cdn.leroymerlin.com.br/products/peneira_em_aco_inox_21cm_mimo_style_1566872911_3d4d_600x600.jpg",
    },
  ];

  return (
    <div>
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
