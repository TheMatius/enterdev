import { useState } from 'react';

const Product = ({product, editProduct, deleteProduct}) => {
  const [productName, setProductName] = useState(product.name);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    editProduct({
      ...product,
      name: productName
    });
    setEditing(false);
  }

  return (
    <div key={product._id} className="productlist_table">
      
      {
        !editing
        ? <p>{product.name}</p>
        : <input type="text" value={productName} onChange={(evt) => setProductName(evt.target.value)} />
      }
      <div>
        {
          !editing 
          ? <input type="button" value="Editar" onClick={() => setEditing(true)} />
          : <input type="button" value="Guardar" onClick={handleEdit} />
        }
        <input type="button" value="Borrar" onClick={() => deleteProduct(product._id)} />
      </div>
    </div>
  );
};

export default Product;