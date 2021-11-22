import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import './styles/Global.css';

import { PRODUCT_LIST, CREATE_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "./gql/product";

import NewProduct from "./components/NewProduct";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(PRODUCT_LIST, { pollInterval: 2000 });
  const [newProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [removeProduct] = useMutation(REMOVE_PRODUCT);

  useEffect(() => {
    if (data) {
      const { viewer: { productList } } = data;
      setProducts(productList);
    }
  }, [data]);
  
  const createProduct = (name) => {
    newProduct({ variables: { name } });
  };

  const editProduct = (product) => {
    const { _id: id, name } = product;
    updateProduct({ variables: { id, name } });
  };

  const deleteProduct = (id) => {
    removeProduct({ variables: { id } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>

  return (
    <div className="app">
      <h1>Lista de Productos</h1>
      <NewProduct createProduct={createProduct} />
      <ProductList 
        products={products}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
