import React, { useState } from 'react'

import CardProductoCarrito from './card/productocarrito.jsx'

export default function ResumenCarrito({proporcional}) {

    const [cupon, setCupon] = useState('')

    const [boton_cupon, setBotonCupon] = useState(false)
    const [boton_update, setBotonUpdate] = useState(false)

    const aplicar_cupon = () => {
        
    }

    const actualizar_carrito = () => {
        
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <p className='' 
                style={{fontSize: 28 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                        fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                Resumen carrito
            </p>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 40 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)'}}>
                    <div style={{width: '60%', height: 40 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Producto
                        </p>
                    </div>
                    <div style={{width: '10%', height: 40 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Precio
                        </p>
                    </div>
                    <div style={{width: '20%', height: 40 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Cantidad
                        </p>
                    </div>
                    <div style={{width: '10%', height: 40 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Subtotal
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <CardProductoCarrito proporcional={proporcional}/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 12 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '50%', height: 36 / proporcional}}>
                        <input 
                            type='default'
                            id='cupon'
                            className='form-control rounded'
                            style={{width: 160 / proporcional, height: 36 / proporcional, border: '1px solid rgb(229, 229, 229)', fontSize: 13 / proporcional, fontWeight: 400, 
                                    lineHeight: `${36 / proporcional}px`, background: 'white', marginRight: 4 / proporcional,
                                    color: 'rgb(119, 119, 119)'}}
                            value={cupon}
                            onChange={(event) => setCupon(event.target.value)}
                            placeholder='Código de cupón'/>
                        <div className='d-flex justify-content-center rounded-pill' 
                            style={{width: 140 / proporcional, height: 36 / proporcional, cursor: 'pointer', background: boton_cupon ? 'rgb(44, 133, 344)' : 'rgb(242, 242, 242)'}}
                            onMouseOver={() => setBotonCupon(true)} onMouseLeave={() => setBotonCupon(false)}
                            onClick={() => aplicar_cupon()}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_cupon ? 'white': 'rgb(120, 120, 120)',
                                        fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Aplicar cupón
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 36 / proporcional}}>
                        <div className='d-flex justify-content-center rounded-pill' 
                            style={{width: 140 / proporcional, height: 36 / proporcional, cursor: 'pointer', background: boton_update ? 'rgb(44, 133, 344)' : 'rgb(242, 242, 242)'}}
                            onMouseOver={() => setBotonUpdate(true)} onMouseLeave={() => setBotonUpdate(false)}
                            onClick={() => actualizar_carrito()}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${36 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_update ? 'white': 'rgb(120, 120, 120)',
                                        fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Actualizar carrito
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
