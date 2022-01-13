import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//firebase
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactModal({open, handleClose, products, total}) {

    const [formData, setFormData] = useState({
        nombre : '',
        telefono : '',
        mail: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }

    const sendOrder = () => {
        let order = {}
        order.buyer = formData
        order.items = products
        order.total = total

        pushOrder(order)
    }

    const pushOrder = async(order) => {
        console.log(db)
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
    }

  return (
    <div>

        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open} 
            className="modal-contact-data"
        >
            {orderId != null ? <h2>La orden se genero con exito {orderId}</h2> :
                <>
                    <DialogTitle>Completa tus datos</DialogTitle>
                        <DialogContent>
                            <Box component="form" noValidate autoComplete="off" className="form-container">
                                <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange}/><br></br>
                                <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange}/><br></br>
                                <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange}/><br></br>
                                <Button variant="outlined" onClick={sendOrder}>Finalizar Compra</Button>
                            </Box>
                    </DialogContent>
                </>
            }

        </Dialog>
    </div>
  );
} 