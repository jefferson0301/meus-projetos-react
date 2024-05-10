import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Principal from './pages/Principal';
import MeusProjetos from './pages/MeusProjetos';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import ComponentePadrao from 'components/ComponentePadrao';
import Projeto from 'pages/Projeto';
import SobreMim from 'pages/SobreMim';
import Contato from 'pages/Contato';

function App() {
  return (
    <div className='container-principal' >
    
      <BrowserRouter>
        <Menu/>
        <Routes>

          <Route path="/" element={<ComponentePadrao/>} >
            <Route path="/" element={<MeusProjetos/>} />
            {/* <Route path="/meusprojetos" element={<MeusProjetos/>} /> */}
            
          </Route>

          <Route path='/contato' element={<Contato />} />
          <Route path='/sobremim' element={<SobreMim/>} />
          <Route path="/meusprojetos/:id" element={<Projeto/>} /> 
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </div>
  );
}

export default App;
