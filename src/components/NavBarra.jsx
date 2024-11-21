// importando components do bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarra = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">

        <Container>
          {/* Icone mercado */}
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "white" }}
          >
            store
          </span>
          {/* Texto logo */}
          <Navbar.Brand href="/home">Super mercado</Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* Paginas */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">Produtos</Nav.Link>
              <Nav.Link href="/CadastroProduto">Cadastro</Nav.Link>
            </Nav>
            {/* Sair */}
            <Nav className="justify-content-end">
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarra;
