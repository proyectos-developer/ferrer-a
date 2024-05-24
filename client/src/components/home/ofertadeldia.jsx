import React, { useState } from 'react'

import icono_right from '../../assets/iconos/icono_right_black_96.png'
import icono_left from '../../assets/iconos/icono_left_black_96.png'

import icono_dot from '../../assets/iconos/icono_dot_red_96.png'

import CardProducto from './card/producto.jsx'

export default function OfertaDelDia({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', heigth: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 28 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', marginRight: 50 / proporcional,
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Ofertas del día
                        </p>
                        <div className='rounded' style={{width: 240 / proporcional, height: 80 / proporcional, border: '2px solid red', background: 'rgba(255, 0, 0, 0.2)'}}>
                            <div className='d-flex' style={{width: '100%', height: 76 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '24.5%', height: 76 / proporcional}}>
                                    <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            5
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            Días
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '0.5%', height: 76 / proporcional}}>
                                    <img src={icono_dot} style={{width: 12 / proporcional, height: 12 / proporcional, marginTop: 32 / proporcional, marginBottom: 32 / proporcional}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '24.5%', height: 76 / proporcional}}>
                                    <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            08
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            Hrs
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '0.5%', height: 76 / proporcional}}>
                                    <img src={icono_dot} style={{width: 12 / proporcional, height: 12 / proporcional, marginTop: 32 / proporcional, marginBottom: 32 / proporcional}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '24.5%', height: 76 / proporcional}}>
                                    <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            09
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            Min
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '0.5%', height: 76 / proporcional}}>
                                    <img src={icono_dot} style={{width: 12 / proporcional, height: 12 / proporcional, marginTop: 32 / proporcional, marginBottom: 32 / proporcional}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '25%', height: 76 / proporcional}}>
                                    <div style={{width: '100%', height: 'auto', marginTop: 10 / proporcional, marginBottom: 10 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            10
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                            Sec
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                