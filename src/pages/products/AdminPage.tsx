import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductRequest } from '../../redux/products/ProductsSlice';
import type { RootState } from '../../store';
import { Products } from '../../redux/products/ProductsSlice';

function AdminPage() {
  const dispatch = useDispatch();
  const addLoading = useSelector((state: RootState) => state.product.addLoading);
  const addError = useSelector((state: RootState) => state.product.addError);

  const [product, setProduct] = useState<Products>({
    id: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: name === 'price' || name === 'stock' ? Number(value) : value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.id || !product.name) {
      alert('Please provide at least id and name');
      return;
    }
    dispatch(addProductRequest(product));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>Admin - Add Product</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Id</label>
          <input name="id" value={product.id} onChange={onChange} />
        </div>
        <div>
          <label>Name</label>
          <input name="name" value={product.name} onChange={onChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={product.description} onChange={onChange} />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="number" step="0.01" value={product.price} onChange={onChange} />
        </div>
        <div>
          <label>Category</label>
          <input name="category" value={product.category} onChange={onChange} />
        </div>
        <div>
          <label>Stock</label>
          <input name="stock" type="number" value={product.stock} onChange={onChange} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={addLoading}>{addLoading ? 'Adding...' : 'Add Product'}</button>
        </div>
      </form>
      {addError && <div style={{ color: 'red' }}>{addError}</div>}
    </div>
  );
}

export default AdminPage;