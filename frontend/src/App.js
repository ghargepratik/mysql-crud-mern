import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProductForm from "./components/productForm/ProductForm";
import ProductTable from "./components/productTable/ProductTable";
import { getSingleProduct } from "./apis/productsApis.js";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [idForUpdate, setIdForUpdate] = useState("");

  const handleClose = () => setIsOpen(false);

  const openProductModel = () => setIsOpen(true);

  return (
    <div className="container">
      <h1 className="text-center">Product Dashboard</h1>
      <div className="m-10 d-flex flex-row-reverse">
        <Button variant="primary" onClick={openProductModel}>
          Create Product
        </Button>
      </div>

      <ProductForm
        handleClose={handleClose}
        isOpen={isOpen}
        idForUpdate={idForUpdate}
        setAllProducts={setAllProducts}
      />
      <ProductTable
        handleClose={handleClose}
        setAllProducts={setAllProducts}
        allProducts={allProducts}
        openProductModel={openProductModel}
        setIdForUpdate={setIdForUpdate}
      />
    </div>
  );
}

export default App;
