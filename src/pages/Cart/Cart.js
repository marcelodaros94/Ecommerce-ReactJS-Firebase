import React, {useContext, useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

import ContactModal from '../../components/ContactModal/ContactModal'

export default function Cart(){
    const { products, totalPrice, onRemove } = useContext(CartContext)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <Container className='container-cart-page'>
            {products.length>0 ?
                <>
                    <Grid container xs={8}>
                        <Grid container spacing={2} className="header-cart">
                            <Grid item xs={8}>
                            <h3>Producto</h3>
                            </Grid>
                            <Grid item xs={2}>
                            <h3>Cantidad</h3>
                            </Grid>
                            <Grid item xs={2}>
                            <h3>Precio</h3>
                            </Grid>
                        </Grid>
                        {products.map((product) => {
                            return(
                            <Grid key={product.id} container spacing={2} className="body-cart item-cart-page">
                                <Grid item xs={2}>                        
                                    <Button onClick={() => onRemove(product)}>Quitar</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    {product.name}
                                </Grid>
                                <Grid item xs={2}>
                                    {product.quantity}
                                </Grid>
                                <Grid item xs={2}>
                                    {product.price}
                                </Grid>
                            </Grid>
                            )
                        })}
                        <Grid container xs={4}className='grid-total-price'>
                            <div>
                                <b>Total: S/{totalPrice}</b>
                            </div>
                        </Grid>
                    </Grid>
                    <Button variant='contained' onClick={handleClickOpen}>Terminar mi compra</Button>
                </>
            :
                <>
                    <p>Carrito vacío</p>
                    <Link to='/'><Button variant='contained'>Regresar</Button></Link>
                </>
            }
        </Container>        
        <ContactModal 
                open={open} 
                handleClose={handleClose} 
                products={products} 
                total={totalPrice}
            />
        </>
    )
}