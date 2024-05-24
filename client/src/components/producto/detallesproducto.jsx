import React, { useState } from 'react'

import icono_star from '../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_yellow_empty_96.png'
import icono_plus from '../../assets/iconos/icono_plus_black_96.png'
import icono_minus from '../../assets/iconos/icono_minus_black_96.png'
import icono_favoritos from '../../assets/iconos/icono_favoritos_black_96.png'
import icono_stats from '../../assets/iconos/icono_stats_black_96.png'
import icono_seguridad from '../../assets/iconos/icono_seguridad_black_96.png'
import icono_visa from '../../assets/iconos/icono_tarjeta_visa_96.png'
import icono_american from '../../assets/iconos/icono_tarjeta_americanexpres_96.png'
import icono_mastercard from '../../assets/iconos/icono_tarjeta_mastercard_96.png'
import icono_diners from '../../assets/iconos/icono_tarjeta_diners_club_96.png'
import icono_debito from '../../assets/iconos/icono_tarjeta_debito_96.png'
import icono_paypal from '../../assets/iconos/icono_tarjeta_paypal_96.png'
import { useDispatch } from 'react-redux'
import { set_modal_carrito } from '../../redux/actions/data'

export default function DetallesProducto({proporcional}) {

    const dispatch = useDispatch()

    const [cantidad, setCantidad] = useState(1)
    
    const [boton_agregar_carrito, setBotonAgregarCarrito] = useState(false)
    const [boton_ver_carrito, setBotonVerCarrito] = useState(false)
    const [boton_comprar, setBotonComprar] = useState(false)

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div className='rounded' style={{width: 70 / proporcional, height: 30 / proporcional, background: 'rgb(255, 210, 0)', marginBottom: 10 / proporcional}}>
                <p className='' 
                    style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                            fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'center'}}>
                    -18%
                </p>
            </div>
            <p className='' 
                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                        fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'left'}}>
                Producto, descripción
            </p>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <div className='d-flex' style={{width: '50%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'left', marginRight: 5 / proporcional}}>
                        $23
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'left', marginRight: 5 / proporcional}}>
                        -
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'left', marginRight: 5 / proporcional}}>
                        $28
                    </p>
                </div>
                <div className='d-flex' style={{width: '50%', height: 'auto'}}>
                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textDecoration: 'underline'}}>
                        (1 comentario cliente)
                    </p>
                </div>
            </div>
            <p className='' 
                style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                        fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                Excelente poder para clavar consistentemente los clavos hasta la superficie en maderas duras. La tecnología de clavos listos para disparar elimina el tiempo de aceleración entre cada descarga de clavos.
            </p>
            <p className='' 
                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black',
                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                Color
            </p>
            <div className='d-flex justify-content-between' style={{width: '60%', height: 60 / proporcional, marginBottom: 10 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                </div>
            </div>
            <p className='' 
                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: '#4a9ae9',
                        fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textDecoration: 'underline'}}>
                Limpiar
            </p>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                <p className='' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(139, 139, 139)',
                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', marginRight: 10 / proporcional, textDecoration: 'line-through'}}>
                    $23
                </p>
                <p className='' 
                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                    $28
                </p>
            </div>
            <p className='' 
                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: '#4a9ae9',
                        fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                230 en stock
            </p>
            <div className='d-flex justify-content-between' style={{width: '80%', height: 50 / proporcional, marginBottom: 10 / proporcional}}>
                <div style={{width: '30%', height: 50 / proporcional}}>
                    <div className='d-flex rounded' 
                        style={{width: '100%', height: 50 / proporcional, background: 'rgb(242, 242, 242)', border: '1px solid rgb(229, 229, 229)'}}>
                        <div style={{width: '25%', height: 48 / proporcional}}>
                            <img src={icono_minus} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 16 / proporcional, cursor: 'pointer'}}
                                onClick={() => setCantidad(cantidad - 1 === 0 ? 1 : cantidad - 1)}/>
                        </div>
                        <div style={{width: '50%', height: 48 / proporcional}}>
                            <input 
                                type='number'
                                disabled={true}
                                className='form-control border-0'
                                style={{width: '100%', height: 48 / proporcional, fontSize: 18 / proporcional, color: 'rgb(119, 119, 119)', textAlign: 'center'}}
                                placeholder='1'
                                value={cantidad}
                                onChange={(event) => setCantidad(event.target.value)}
                                id='cantidad'/>
                        </div>
                        <div style={{width: '25%', height: 48 / proporcional}}>
                            <img src={icono_plus} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 16 / proporcional, cursor: 'pointer'}}
                                onClick={() => setCantidad(cantidad + 1)}/>
                        </div>
                    </div>
                </div>
                <div style={{width: '60%', height: 50 / proporcional}}>
                    <button className='btn rounded-pill' style={{width: '100%', height: 50 / proporcional, background: boton_agregar_carrito ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                        fontSize: 16 / proporcional, color: boton_agregar_carrito ? 'white' : 'black', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}
                        onMouseOver={() => setBotonAgregarCarrito(true)} onMouseLeave={() => setBotonAgregarCarrito(false)}
                        onClick={() => dispatch(set_modal_carrito(true))}>
                        Agregar a carrito
                    </button>
                </div>
            </div>
            <div style={{width: '80%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <button className='btn rounded-pill' style={{width: '100%', height: 50 / proporcional, background: 'white', fontSize: 16 / proporcional, border: '1px solid rgb(229, 229, 229)',
                    color: boton_ver_carrito ? '#4a9ae9' : 'black', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}
                    onMouseOver={() => setBotonVerCarrito(true)} onMouseLeave={() => setBotonVerCarrito(false)}>
                    Ver carrito
                </button>
            </div>
            <div style={{width: '80%', height: 50 / proporcional, marginBottom: 20 / proporcional}}>
                <button className='btn rounded-pill' style={{width: '100%', height: 50 / proporcional, background: boton_comprar ? 'black' : '#4a9ae9', fontSize: 16 / proporcional,
                    color: 'white', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}
                    onMouseOver={() => setBotonComprar(true)} onMouseLeave={() => setBotonComprar(false)}>
                    Comprar ahora
                </button>
            </div>
            <div style={{width: '80%', height: 60 / proporcional, marginBottom: 20 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                    <div className='d-flex' style={{width: '49%', height: 40 / proporcional, marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_stats} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                            Comparar
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '2%', height: 60 / proporcional}}>
                        <div style={{width: 1 / proporcional, height: 60 / proporcional, background: 'rgb(189, 189, 189)'}}/>
                    </div>
                    <div className='d-flex' style={{width: '49%', height: 40 / proporcional, marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                        <img src={icono_favoritos} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                            Agregar a favoritos
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 2 / proporcional, background: 'rgb(189, 189, 189)', marginBottom: 20 / proporcional}}/>
            <div className='d-flex' style={{width: '100%', height: 20 / proporcional, marginBottom: 10 / proporcional}}>
                <img src={icono_seguridad} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 10 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                    Tiempo de entrega estimado: <span style={{fontWeight: 500, color: 'rgb(139, 139, 139)', marginLeft: 5 / proporcional}}>Hasta 4 días hábiles</span>
                </p>
            </div>
            <div className='d-flex' style={{width: '100%', height: 20 / proporcional, marginBottom: 20 / proporcional}}>
                <img src={icono_seguridad} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 10 / proporcional}}/>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                    Reembolo y entrega gratis: <span style={{fontWeight: 500, color: 'rgb(139, 139, 139)', marginLeft: 5 / proporcional}}>Compras por encima de los $200</span>
                </p>
            </div>
            <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                <img src={icono_visa} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional}}/>
                <img src={icono_american} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional}}/>
                <img src={icono_mastercard} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional}}/>
                <img src={icono_diners} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional}}/>
                <img src={icono_debito} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional, marginRight: 10 / proporcional}}/>
                <img src={icono_paypal} style={{width: 48 / proporcional, height: 48 / proporcional, padding: 2 / proporcional}}/>
            </div>
        </div>
    )
}
