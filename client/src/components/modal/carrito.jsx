import React, { useState } from 'react'

import icono_close_black from '../../assets/iconos/icono_close_black_96.png'
import icono_close_red from '../../assets/iconos/icono_close_red_96.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set_modal_carrito } from '../../redux/actions/data'

export default function ModalCarrito({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [boton_carrito, setBotonCarrito] = useState(false)
    const [boton_pgar, setBotonPagar] = useState(false)

    return (
        <div className='position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgb(39, 39, 39, 0.6)'}}>
            <div className='position-fixed end-0 top-0 shadow rounded-left' style={{width: 400 / proporcional, height: '100%', background: 'white', zIndex: 9999}}>
                <div className='d-flex justify-content-between' 
                    style={{width: '100%', height: 40 / proporcional, background: 'rgb(242, 242, 242)', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                        Revisión carrito
                    </p>
                    <div className='d-flex justify-content-end' style={{width: 'auto', height: 20 / proporcional}}>
                        <img src={icono_close_black} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional, cursor: 'pointer'}}
                            onClick={() => dispatch(set_modal_carrito(false))}/>
                    </div>
                </div>
                <div className='' style={{width: '100%', height: '100%'}}>
                    <div style={{width: '100%', height: '100%', padding: 20 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 100 / proporcional}}>
                            <div className='rounded' style={{width: 100 / proporcional, height: 100 / proporcional, background: 'rgb(229, 229, 229)', marginRight: 10 / proporcional}}/>
                            <div className='d-flex justify-content-between' style={{width: 250 / proporcional, paddingTop: 5 / proporcional, paddingBottom: 5 / proporcional}}>
                                <div style={{width: 220 / proporcional, height: 100 / proporcional}}>
                                    <div style={{width: 'auto', height: 40 / proporcional, marginBottom: 0 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                            Producto descripción
                                        </p>
                                    </div>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                        1 x $279
                                    </p>
                                </div>
                                <img src={icono_close_red} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute start-0' style={{width: '100%', height: 60 / proporcional, bottom: 100 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, padding: 20 / proporcional, background: 'rgb(242, 242, 242)'}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                Subtotal:
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                $279
                            </p>
                        </div>
                    </div>
                    <div className='position-absolute bottom-0 start-0' style={{width: '100%', height: 100 / proporcional}}>
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 100 / proporcional, padding: 20 / proporcional}}>
                            <button className='btn rounded-pill' 
                                style={{width: '49%', height: 50 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional, fontSize: 18 / proporcional,
                                background: boton_carrito ? 'rgb(255, 210, 0)' : '#4a9ae9', color: boton_carrito ? 'black' : 'white'}} 
                                onMouseOut={() => setBotonCarrito(true)} onMouseLeave={() => setBotonCarrito(false)}
                                onClick={() => {navigate ('/carrito-compras'); dispatch(set_modal_carrito(false))}}>
                                Ver carrito
                            </button>
                            <button className='btn rounded-pill' 
                                style={{width: '49%', height: 50 / proporcional, marginTop: 5 / proporcional, marginBottom: 5 / proporcional, fontSize: 18 / proporcional,
                                background: boton_pgar ? '#4a9ae9' : 'rgb(255, 210, 0)', color: boton_pgar ? 'white' : 'black'}} 
                                onMouseOut={() => setBotonPagar(true)} onMouseLeave={() => setBotonPagar(false)}>
                                Pagar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
