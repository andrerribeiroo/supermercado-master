// importando components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const url = "http://localhost:5000/categorias"
const url2 = "http://localhost:5000/produtos"

const EditarProduto = () => {
    
  const [categoriaC, setCategoriaC] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      try{
        const req = await fetch(url);
        const cate = await req.json();
        setCategoriaC(cate);
      }
      catch(erro){
        console.log(erro.message)
      }
    }
    fetchData();
  }, []);
  
  
  //   Link produto sem imagem
    const linkImagem = "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

  
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagemUrl, setImagemUrl] = useState("");
  
    const [alertClass, setAlertClass] = useState("mb-3 d-none");
    const [alertMessagem, setAlertMessage] = useState("");
    const [alertVariant, setAlertVariant] = useState("danger");


    const navigate = useNavigate()

    // cod para pegar a url atual e transformar em um array
    const params = window.location.pathname.split("/")
    const idProd = params[params.length - 1]


    //Buscar as informações do produto
    useEffect(() => {
      async function fetchData(){
        try{
          const req = await fetch(`http://localhost:5000/produtos/${idProd}`)
          const prod = await req.json()
          console.log(prod)
          setNome(prod.nome)
          setDescricao(prod.descricao)
          setPreco(prod.preco)
          setImagemUrl(prod.imagemUrl == "" ? "" : prod.imagemUrl)
          setCategoria(prod.categoria)
        }
        catch(error){
        console.log(error.message)
        }
      }
      fetchData()
    })

    // Função pra lidar com o recarregamento da página
    const handleSubmit = async (e) => {

    // faz com que a pagina não recarregue
    e.preventDefault();

    //faça com que quando eu cadastrar um produto, todos os requisitos volte do 0
    setNome("");
    setDescricao("");
    setPreco("");
    setCategoria("");
    setImagemUrl("");

    // if de alerta com textos
    if (nome != "") {
      if (descricao != "") {
        if (preco != "") {
          const produto = {nome, descricao, categoria, preco, imagemUrl}
          console.log(produto);
          
          try{
            const req = await fetch(`http://localhost:5000/produtos/${idProd}`, {
              method: 'PUT',
              headers: {"Content-Type": "application/json",},
              body: JSON.stringify(produto),
              });

              const res = await req.json()
              console.log(res);

              setAlertClass("mb-3 mt-2");
              setAlertVariant("success");
              setAlertMessage("Cadastro efetuado com sucesso");
              alert("Produto cadastrado com sucesso");
              setTimeout(() => {
              navigate("/home");
              }, 2000);
                  
          }
          catch(error){
            console.log(error.message);
          }
          
        }
        else {
          setAlertClass("mb-3 mt-2");
          setAlertMessage("O campo preço não pode ser vazio");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMessage("O campo descrição não pode ser vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMessage("O campo nome não pode ser vazio");
    }
  };  


    return (
      <div>
        <NavBarra />
        <Container>
          <h1 style={{margin: "50px"}}>Editar Produtos</h1>
  
          <form onSubmit={handleSubmit} className="mt-3">
            <Row className="mb-3">
              <Col xs={6}>
                {/* Caixinha de Nome */}
                <FloatingLabel
                  controlId="floatingInputNome"
                  label="Nome"
                  className="mb-3"
                >
                  <Form.Control
                    type="Text"
                    placeholder="Digite seu nome do produto"
                    value={nome}
                  onChange={(e) => {setNome(e.target.value);}}
                  />
                </FloatingLabel>
  
                {/* Caixinha de Descricao */}
                <FloatingLabel
                  controlId="floatingInputDescricao"
                  label="Descricao"
                  className="mb-3"
                  value={descricao}
                  onChange={(e) => {setDescricao(e.target.value);}}
                >
                  <Form.Control
                    type="Text"
                    placeholder="Digite a Descrição do produto"
                  />
                </FloatingLabel>
  
                {/* Select categorias */}
                <Form.Group as={Col} controlId="formGridTipo">
                  <Form.Label >Tipo de produto</Form.Label>
                  <Form.Select
                  value={categoria}
                  onChange={(e) => {setCategoria(e.target.value);}}>
  
                  <option>Selecione uma categoria</option>
  
                    {categoriaC.map((cat) => (
                      <option key={cat.id} value={cat.nome}>
                          {cat.nome}
                      </option>
  
                    ))}
                  </Form.Select>
                </Form.Group>
  
                {/* Caixinha de Preço */}
                <Form.Label style={{margin: "20px"}}> Preço do produto </Form.Label>
  
                <FloatingLabel
                  controlId="floatingInputPreco"
                  label="Preco"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    step="0.05"
                    placeholder="Digite o Preco do produto"
                    value={preco}
                    onChange={(e) => {setPreco(e.target.value);}}
                  />
                </FloatingLabel>
  
  
              </Col>
                  
              <Col xs={6}>
  
              {/* Caixinha de Imagem*/}
  
              <Form.Group controlId="formFileLg" className="mb-3">
  
              <FloatingLabel
                  controlId="floatingInputImagem"
                  label="Envie o link da IMAGEM !"
                  className="mb-3"
                >
                  <Form.Control
                    type="Text"
                    placeholder="Envie o link da IMAGEM do produto"
                    value={imagemUrl}
                    onChange={(e) => {setImagemUrl(e.target.value)}}
                  />
                </FloatingLabel>
  
                <Image src={imagemUrl == "" ? linkImagem : imagemUrl} rounded width={300} height={300} style={{
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"}}/>
  
                </Form.Group>
  
              </Col>
            </Row>
  
              {/* Alerta caso haja erro */}
            <Alert className={alertClass} variant={alertVariant} >
                {alertMessagem}
            </Alert>
  
              {/* Botão para enviar formulário */}
              <Button variant="success" size="lg" type="submit">
                Editar
              </Button>
  
          </form>
        </Container>
      </div>
    );
  };

export default EditarProduto
