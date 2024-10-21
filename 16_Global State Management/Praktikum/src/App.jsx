import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
