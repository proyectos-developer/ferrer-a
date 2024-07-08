import React, { useState } from 'react'

import icono_close from '../../assets/iconos/icono_close_white_96.png'
import { set_modal_favoritos } from '../../redux/actions/data'
import { useDispatch } from 'react-redux'

export default function ModalWishlistTablet({proporcional}) {

    const dispatch = useDispatch()

    const [boton_opciones, setBotonOpciones] = useState(false)

    return (
        <div className='position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgb(39, 39, 39, 0.6)'}}>
            <div className='position-fixed top-50 start-50 translate-middle shadow rounded' style={{width: 750 / proporcional, height: 300 / proporcional, background: 'white'}}>
                <div className='rounded-top' style={{width: '100%', height: 60 / proporcional, background: 'rgb(34, 34, 34)', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                        <div style={{width: '50%', height: 40 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Wishlist (1)
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '50%', height: 40 / proporcional}}>
                            <img src={icono_close} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional, cursor: 'pointer'}}
                                onClick={() => dispatch(set_modal_favoritos(false))}/>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', height: 240 / proporcional}}>
                    <div style={{width: '100%', height: 240 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 180 / proporcional, padding: 20 / proporcional, borderBottom: '0.5px solid rgba(139, 139, 139, 0.6)'}}>
                            <div className='rounded' style={{width: 140 / proporcional, height: 140 / proporcional, marginRight: 20 / proporcional, background: 'rgba(139, 139, 139, 0.6)'}}/>
                            <div className='d-flex' style={{width: '100%', height: 140 / proporcional, paddingTop: 15 / proporcional, paddingBottom: 15 / proporcional}}>
                                <div style={{width: '50%', height: 140 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: '#4a9ae9',
                                                fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                        Nombre producto
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                        $539
                                    </p>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                        11 Mayo, 2024
                                    </p>
                                </div>
                                <div style={{width: '50%', height: 140 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                        322 en stock
                                    </p>
                                    <button className='btn rounded-pill' style={{width: '100%', height: 60 / proporcional, background: boton_opciones ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                                                fontSize: 20 / proporcional, color: boton_opciones ? 'white' : 'rgb(102, 102, 102)'}}
                                                onMouseOver={() => setBotonOpciones(true)} onMouseLeave={() => setBotonOpciones(false)}>
                                        VER OPCIONES
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: 60 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional,
                            paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                                <div style={{width: '50%', height: 40 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textDecoration: 'underline'}}>
                                        VER PÁGINA DE FAVORITOS
                                    </p>
                                </div>
                                <div className='d-flex justify-content-end' style={{width: '50%', height: 40 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textDecoration: 'underline'}}
                                                onClick={() => dispatch(set_modal_favoritos(false))}>
                                        CONTINUAR COMPRANDO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
