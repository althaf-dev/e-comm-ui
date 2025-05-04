import { useEffect } from 'react';
import ProdcutList from '../../components/products/ProdcutList';
import { useDispatch } from 'react-redux';
import { getProductList } from '../../redux/products/ProductsSlice';
import Navbar from '../../components/navbar/Navbar';
import { Button, Box } from '@mui/material';

function ProductsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{mt:10,alignContent:"end"}}>
        <Button>show favorite list</Button>
        <Button>show all list</Button>
      </Box>
      <ProdcutList />;
    </>
  );
}

export default ProductsPage;
