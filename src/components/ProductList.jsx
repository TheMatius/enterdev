import '../styles/ProductList.css';

import Product from './Product';

const ProductList = ({products, editProduct, deleteProduct}) => {
  return (
    <div className="productlist">
      <div className="productlist_table">
        <h3>Nombre del Producto</h3>
        <h3>Acciones</h3>
      </div>
      {
        products.map((product) => (
          <Product 
            key={product._id}
            product={product}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
          />
        ))
      }
    </div>
  );
};

export default ProductList;