import React from 'react'

import icono_right from '../../assets/iconos/icono_right_black_96.png'
import icono_left from '../../assets/iconos/icono_left_black_96.png'

import CardProducto from './card/producto.jsx'

export default function ProductosMasValorados({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: '100%', heigth: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 28 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', marginRight: 50 / proporcional,
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Productos más valorados
                    </p>
                </div>

                <div style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                        <img className='rounded-circle' src={icono_left} 
                            style={{width: 34 / proporcional, height: 34 / proporcional, padding: 10 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer', background: '#cccccc'}}/>
                        <img className='rounded-circle' src={icono_right} 
                            style={{width: 34 / proporcional, height: 34 / proporcional, padding: 10 / proporcional, cursor: 'pointer', background: '#cccccc'}}/>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '19%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '19%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '19%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '19%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '19%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}
