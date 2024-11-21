// importando components
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const CadastroProduto = () => {
  const cats = [
    { id: 1, nome: "Bebidas" },
    { id: 2, nome: "Alimentos" },
    { id: 3, nome: "Saúde" },
    { id: 4, nome: "Higiene" },
    { id: 5, nome: "Esporte" },
    { id: 6, nome: "Brinquedos" },
  ];


//   Link produto sem imagem
  const linkImagem = "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";


  return (
    <div>
      <NavBarra />
      <Container>
        <h1 style={{margin: "50px"}}>Cadastrar Produtos</h1>

        <form className="mt-3">
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
                />
              </FloatingLabel>

              {/* Caixinha de Descricao */}
              <FloatingLabel
                controlId="floatingInputDescricao"
                label="Descricao"
                className="mb-3"
              >
                <Form.Control
                  type="Text"
                  placeholder="Digite a Descrição do produto"
                />
              </FloatingLabel>

              {/* Select categorias */}
              <Form.Group as={Col} controlId="formGridTipo">
                <Form.Label >Tipo de produto</Form.Label>
                <Form.Select>

                <option>Selecione uma categoria</option>

                  {cats.map((cat) => (
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
                  step="0.2"
                  placeholder="Digite o Preco do produto"
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
                />
              </FloatingLabel>

              <Image src={linkImagem} rounded width={300} height={300} style={{
boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)"}}/>

              </Form.Group>

            </Col>
          </Row>

            {/* Alerta caso haja erro */}
            <Alert key="danger" variant="danger" >
                Há um erro
            </Alert>

            {/* Botão para enviar formulário */}
            <Button variant="success" size="lg" type="submit">
                Cadastrar
            </Button>

        </form>
      </Container>
    </div>
  );
};

export default CadastroProduto;
