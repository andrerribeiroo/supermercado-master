import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import CadastroProduto from './pages/CadastroProduto';
import EditarProduto from './pages/EditarProduto';
// Importação do Footer
import Footer from './components/Footer';

//Importação do gerenciador de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>  
          <Route path="/home" element={<Home />}/>
          <Route path="/produto/cadastrar" element={<CadastroProduto />}/>
          <Route path="/produto/editar/:id" element={<EditarProduto />}/>
                 
        </Routes>
      </BrowserRouter>
      <Footer /> {/* Adicionando o Footer aqui */}
    </div>
  );
}

export default App;
