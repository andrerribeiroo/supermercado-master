import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

  // faz com que a pagina não recarregue

const CardProduto = (props) => {

  const handleDelete= async (e) => {

    const req = await fetch(`http://localhost:5000/produtos/${props.id}`, {
      method: "DELETE"
      });
        const res = await req.json()
        console.log(res)
        alert(`Produto ${res.nome} removido`)
  };

  return (
    <div >
      <Card style={{ width: "22rem", height: "30rem", margin: "30px" }}>
        {/* Imagem do Card */}
        <Card.Img variant="top" src={props.imagemUrl} height="200px" />

        <Card.Body>
          {/* Título do card com nome do produto */}
          <Card.Title>{props.nome}</Card.Title>
          {/* Subtitulo no card com preco do produto */}
          <Card.Subtitle className="mb-2 text-muted">
            Preço: {props.preco}
          </Card.Subtitle>
          <Card.Text>
            <b> Descrição: </b> <br></br> {props.descricao}
          </Card.Text>
          <Card.Text>
            <b> Categoria: </b> <br></br> {props.categoria}
          </Card.Text>

          <Card.Link href="/home">
            <Button variant="warning" href="/produto/editar/:id">Editar</Button>
          </Card.Link>

          <Card.Link href="/home">
            <Button variant="danger" type="button" onClick={handleDelete} >Excluir</Button>
          </Card.Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduto;
