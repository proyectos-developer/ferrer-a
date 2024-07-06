import React from 'react'

import Suscribirse from '../home/suscribirse.jsx'
import ResumenCarrito from './resumencarrito.jsx'
import TotalCarrito from './totalcarrito.jsx'
import CardProducto from '../home/card/producto.jsx'

export default function CarritoComprasPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 110 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                     background: 'rgb(242, 242, 242)', paddingTop: 20 / proporcional, paddingBottom: 20 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 110 / proporcional}}>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <div className='d-flex justify-content-center' style={{width: 'auto', height: 'auto', marginBottom: 10 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional, textDecoration: 'underline'}}>
                                Home
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional}}>
                                /
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                        fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional, textDecoration: 'underline'}}>
                                Carrito compras
                            </p>
                        </div>
                        <p className='' 
                            style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                            CARRITO COMPRAS
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingTop: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '74%', height: 'auto'}}>
                        <ResumenCarrito proporcional={proporcional}/>
                    </div>
                    <div style={{width: '25%', height: 'auto'}}>
                        <TotalCarrito proporcional={proporcional}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingBottom: 80 / proporcional}}>
                <p className='' 
                    style={{fontSize: 28 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                            fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                    Puedes estar interesado en...
                </p>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '24%', height: 'auto'}}>
                        <CardProducto proporcional={proporcional}/>
                    </div> 
                    <div style={{width: '24%', height: 'auto'}}>
                        <CardProducto proporcional={proporcional}/>
                    </div> 
                    <div style={{width: '24%', height: 'auto'}}>
                        <CardProducto proporcional={proporcional}/>
                    </div> 
                    <div style={{width: '24%', height: 'auto'}}>
                        <CardProducto proporcional={proporcional}/>
                    </div> 
                </div>
            </div>
            <Suscribirse proporcional={proporcional}/>
        </div>
    )
}
