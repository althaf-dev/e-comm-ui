import { Grid2 } from '@mui/material';

import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function ProdcutList() {
  const { products } = useSelector((state: RootState) => state.product);
  
  return (
    <Grid2 container gap={3} rowGap={3} border={"0px solid red"} sx={{placeContent:"center",mt:10}}>
      {products.map((item) => (
        <Grid2 key={item.id} size={3}>
          <ProductCard product={item} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ProdcutList;
