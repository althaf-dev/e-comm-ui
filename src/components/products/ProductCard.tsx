import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { Products } from '../../redux/products/ProductsSlice';

interface ProductCardProps{
    product:Products
}

function ProductCard({ product }:ProductCardProps) {
  return (
    <Card>
      <CardContent sx={{minHeight:"100px"}}>
      <Typography variant='h6'>{product.name}</Typography>
        <Typography variant='body2'>{product.description}</Typography>
      </CardContent>
      <CardActionArea>
        <Button>favorite </Button>
        <Button>add to card </Button>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
