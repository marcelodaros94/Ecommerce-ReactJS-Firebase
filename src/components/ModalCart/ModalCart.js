import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom'
export default function ModalCart({ products, total }){
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(orange[500]),
        backgroundColor: orange[500],
        '&:hover': {
          backgroundColor: orange[700],
        },
      }));
    return(
            <div className={`box-cart active`}>
                {products.length>0 ?
                    <>
                    {products.map((product) => {
                        return(
                            <div className='item-cart-list' key={product.id}>
                                <p>{product.name}</p>
                                <p>S/ {product.price} c/u</p>
                                <span>Cant: {product.quantity}</span>
                            </div>
                        )
                    })}
                    <div className="container-finish">
                        <p>Total: S/{total}</p>
                        <Link to="/cart">
                            <ColorButton variant="contained">Finalizar compra</ColorButton>
                        </Link>
                    </div> 
                    </>
                : <p>Vacío</p>
                }
            </div>
    )
}