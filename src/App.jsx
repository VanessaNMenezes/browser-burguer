import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { Menu } from './pages/menu/Menu';
import { Solicitations } from './pages/solicitations/Solicitations';
import './index.css';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/pedidos" element={<Solicitations />} />
      
        </Routes>
      </BrowserRouter>
    );
  };
  
export default App;