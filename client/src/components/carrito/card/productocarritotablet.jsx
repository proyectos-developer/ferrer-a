import React, { useState } from 'react'

import icono_delete_red from '../../../assets/iconos/icono_cross_red_96.png'
import icono_delete_white from '../../../assets/iconos/icono_cross_white_96.png'
import icono_minus from '../../../assets/iconos/icono_minus_black_96.png'
import icono_plus from '../../../assets/iconos/icono_plus_black_96.png'

export default function CardProductoCarrito({proporcional}) {

    const [cantidad, setCantidad] = useState(1)
    const [precio, setPrecio] = useState (110)

    const [boton_delete, setBotonDelete] = useState(false)

    return (
        <div className='d-flex' style={{width: '100%', height: 112 / proporcional, borderBottom: '1px solid rgb(128, 128, 128)'}}>
            <div className='d-flex justify-content-center' style={{width: '5%', height: 112 / proporcional, paddingTop: 12 / proporcional, paddingBottom: 12 / proporcional}}>
                <img  src={icono_delete_red} 
                    style={{width: 88 / proporcional, height: 88 / proporcional, padding: 35 / proporcional, cursor: 'pointer'}}
                        onMouseOver={() => setBotonDelete(true)} onMouseLeave={() => setBotonDelete(false)}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '15%', height: 112 / proporcional, padding: 12 / proporcional}}>
                <div className='rounded' style={{width: 88 / proporcional, height: 88 / proporcional, background: 'rgba(219, 219, 219, 0.8)'}}/>
            </div>
            <div style={{width: '40%', height: 112 / proporcional, padding: 12 / proporcional}}>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${88 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                            fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                    Skil 7-1/4 in handheld Circular Saw 5280-01
                </p>
            </div>
            <div style={{width: '10%', height: 112 / proporcional, padding: 12 / proporcional}}>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${88 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                            fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                    S/. {precio}
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '20%', height: 112 / proporcional, padding: 12 / proporcional}}>
                <div className='d-flex' 
                    style={{width: 120 / proporcional, height: 40 / proporcional, marginTop: 24 / proporcional, marginBottom: 24 / proporcional, background: 'rgb(242, 242, 242)'}}>
                    <img src={icono_minus} style={{width: 30 / proporcional, height: 40 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional,
                            paddingLeft: 7.5 / proporcional, paddingRight: 7.5 / proporcional, cursor: 'pointer'}}
                        onClick={() => setCantidad (cantidad > 1 ? cantidad - 1 : 1)}/>
                    <input 
                        type='default'
                        className='form-control border-0'
                        disabled={false}
                        style={{width: 60 / proporcional, height: 40 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${40 / proporcional}px`,
                            color: 'rgb(119, 119, 119)', background: 'rgb(242, 242, 242)', textAlign: 'center'}}
                        value={cantidad}
                        onChange={(event) => setCantidad(even.target.value)}
                        placeholder='1'/>

                    <img src={icono_plus} style={{width: 30 / proporcional, height: 40 / proporcional, paddingTop: 12.5 / proporcional, paddingBottom: 12.5 / proporcional,
                            paddingLeft: 7.5 / proporcional, paddingRight: 7.5 / proporcional, cursor: 'pointer'}}
                        onClick={() => setCantidad (cantidad + 1)}/>
                </div>
            </div>
            <div style={{width: '10%', height: 112 / proporcional, padding: 12 / proporcional}}>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${88 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                    S/. {precio * cantidad}
                </p>
            </div>
        </div>
    )
}
