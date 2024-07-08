import React, { useState } from 'react'

import icono_right from '../../assets/iconos/icono_right_black_96.png'
import icono_left from '../../assets/iconos/icono_left_black_96.png'

import CardProducto from './card/producto.jsx'

export default function ProductosPopulares({proporcional}) {

    const [menu_producto, setMenuProductos] = useState('')
    const [menu_seleccion, setMenuSeleccion] = useState('principal')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '80%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', heigth: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 28 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Productos populares
                        </p>
                        <p className='' 
                            style={{fontSize: 22 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: menu_producto === 'principal' || menu_seleccion === 'principal' ? '#4a9ae9' : 'black',
                                    fontWeight: menu_producto === 'principal' || menu_seleccion === 'principal' ? 600 : 500, 
                                    fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'center'}}
                                    onMouseOver={() => setMenuProductos('principal')} onMouseLeave={() => setMenuProductos('')}
                                    onClick={() => setMenuSeleccion ('principal')}>
                            Principales
                        </p>
                        <p className='' 
                            style={{fontSize: 22 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: menu_producto === 'nuevo' || menu_seleccion === 'nuevo' ? '#4a9ae9' : 'black',
                                    fontWeight: menu_producto === 'nuevo' || menu_seleccion === 'nuevo' ? 600 : 500, 
                                    fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'center'}}
                                    onMouseOver={() => setMenuProductos('nuevo')} onMouseLeave={() => setMenuProductos('')}
                                    onClick={() => setMenuSeleccion ('nuevo')}>
                            Nuevos
                        </p>
                        <p className='' 
                            style={{fontSize: 22 / proporcional, lineHeight: `${34 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: menu_producto === 'vendido' || menu_seleccion === 'vendido' ? '#4a9ae9' : 'black',
                                    fontWeight: menu_producto === 'vendido' || menu_seleccion === 'vendido' ? 600 : 500, 
                                    fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'center'}}
                                    onMouseOver={() => setMenuProductos('vendido')} onMouseLeave={() => setMenuProductos('')}
                                    onClick={() => setMenuSeleccion ('vendido')}>
                            Más vendido
                        </p>
                    </div>
                </div>

                <div style={{width: '20%', height: 'auto'}}>
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                        <img className='rounded-circle' src={icono_left} 
                            style={{width: 34 / proporcional, height: 34 / proporcional, padding: 10 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer', background: '#cccccc'}}/>
                        <img className='rounded-circle' src={icono_right} 
                            style={{width: 34 / proporcional, height: 34 / proporcional, padding: 10 / proporcional, cursor: 'pointer', background: '#cccccc'}}/>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '32%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
                                