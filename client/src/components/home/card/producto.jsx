import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import icono_favoritos_black from '../../../assets/iconos/icono_favoritos_black_96.png'
import icono_view_black from '../../../assets/iconos/icono_view_black_96.png'
import icono_stats_black from '../../../assets/iconos/icono_stats_black_96.png'

import icono_favoritos_white from '../../../assets/iconos/icono_favoritos_white_96.png'
import icono_view_white from '../../../assets/iconos/icono_view_white_96.png'
import icono_stats_white from '../../../assets/iconos/icono_stats_white_96.png'

import icono_star from '../../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../../assets/iconos/icono_star_yellow_empty_96.png'
import { set_modal_favoritos, set_modal_producto } from '../../../redux/actions/data'
import { useNavigate } from 'react-router-dom'

export default function CardProducto({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ver_opciones_producto, setVerOpcionesProducto] = useState ('')
    const [seleccionar_icono, setSeeleccionarIcono] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto'}}
            onMouseOver={() => setVerOpcionesProducto(true)} onMouseLeave={() => setVerOpcionesProducto(false)}>
            <div className='position-relative' style={{width: '100%', height: ver_opciones_producto ? 230 / proporcional : 300 / proporcional}}>
                <div style={{width: '100%', height: ver_opciones_producto ? 230 / proporcional : 300 / proporcional, background: '#f6f5f5'}}/>
                <div className='position-absolute rounded' style={{width: 50 / proporcional, height: 30 / proporcional, background: 'rgb(255, 210, 0)', top: 10 / proporcional,
                    left: 10 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Lora, serif', cursor: 'default', textAlign: 'center'}}>
                        -4%
                    </p>
                </div>
                {
                    ver_opciones_producto ? (
                    <img className='rounded-circle position-absolute' src={seleccionar_icono === 'favoritos' ? icono_favoritos_white : icono_favoritos_black}
                        style={{width: 35 / proporcional, height: 35 / proporcional, padding: 9 / proporcional, background: seleccionar_icono === 'favoritos' ? '#4a9ae9' : 'white', 
                                cursor: 'pointer', top: 10 / proporcional, right: 10 / proporcional, zIndex: 99999}}
                                onMouseOver={() => setSeeleccionarIcono('favoritos')} onMouseLeave={() => setSeeleccionarIcono('')}
                                onClick={() => dispatch(set_modal_favoritos(true))}/>
                    ) : null
                }
                {
                    ver_opciones_producto ? (
                        <img className='rounded-circle position-absolute' src={seleccionar_icono === 'stats' ? icono_stats_white : icono_stats_black}
                            style={{width: 35 / proporcional, height: 35 / proporcional, padding: 9 / proporcional, background: seleccionar_icono === 'stats' ? '#4a9ae9' : 'white', 
                                    cursor: 'pointer', top: 55 / proporcional, right: 10 / proporcional, zIndex: 99999}}
                                    onMouseOver={() => setSeeleccionarIcono('stats')} onMouseLeave={() => setSeeleccionarIcono('')}/>
                    ) : null
                }
                {
                    ver_opciones_producto ? (
                        <img className='rounded-circle position-absolute' src={seleccionar_icono === 'view' ? icono_view_white : icono_view_black}
                            style={{width: 35 / proporcional, height: 35 / proporcional, padding: 9 / proporcional, background: seleccionar_icono === 'view' ? '#4a9ae9' : 'white', 
                                    cursor: 'pointer', top: 100 / proporcional, right: 10 / proporcional, zIndex: 99999}}
                                    onMouseOver={() => setSeeleccionarIcono('view')} onMouseLeave={() => setSeeleccionarIcono('')}
                                    onClick={() => dispatch(set_modal_producto(true))}/>
                    ) : null
                }
            </div>
            <div style={{width: '100%', height: 'auto', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                <div style={{width: '100%', height: 40 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        Producto, descripción
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 20 / proporcional}}>
                    <img src={icono_star} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 1 / proporcional, marginRight: 5 / proporcional}}/>
                    <img src={icono_star_empty} style={{width: 14 / proporcional, height: 14 / proporcional, margin: 1 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 22 / proporcional, marginBottom: ver_opciones_producto ? 20 / proporcional : 0}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        $53.00
                    </p>
                </div>
                {
                    ver_opciones_producto ? (
                        <button className='btn rounded-pill' style={{width: 180 / proporcional, height: 50 / proporcional, background: 'rgb(255, 210, 0)', fontSize: 16 / proporcional,
                            color: 'black', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}
                            onClick={() => navigate ('/producto/producto/sku')}>
                            Ver opciones
                        </button>
                    ) : null
                }
            </div>
        </div>
    )
}
