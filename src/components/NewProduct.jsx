import { useState } from "react";

import '../styles/NewProduct.css';

const NewProduct = ({ createProduct }) => {
  const [product, setProduct] = useState("");

  const handleClick = () => {
    createProduct(product);
    setProduct("");
  };

  return (
    <div className="products_createmenu">
      <input 
        type="text"
        placeholder="Nombre del producto"
        value={product}
        onChange={(evt) => setProduct(evt.target.value)}
      />
      <input
        type="button"
        value="Crear"
        onClick={handleClick}
      />
    </div>
  );
};

export default NewProduct;