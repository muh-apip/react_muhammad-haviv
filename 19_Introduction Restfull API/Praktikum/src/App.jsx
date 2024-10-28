import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateProduct from './components/CreateProduct'
import LandingPage from './components/LandingPage'
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/createProduct' element={<CreateProduct/>}/>
        <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
