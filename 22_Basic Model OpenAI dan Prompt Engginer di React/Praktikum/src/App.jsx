import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import LandingPage from './components/LandingPage';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/chatBot" element={<ChatBot />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
