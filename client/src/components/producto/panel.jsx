import React from 'react'

import DetallesProducto from './detallesproducto.jsx'
import ImagenesProducto from './imagenesproducto.jsx'
import CaracteristicasAdicionales from './caracteristicasadicionales.jsx'
import ComparacionRapida from './comparacionrapida.jsx'
import ProductosRelacionados from './productosrelacionados.jsx'
import Suscribirse from '../home/suscribirse.jsx'

export default function ProductoPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional,
                     background: 'rgb(242, 242, 242)', paddingTop: 27.5 / proporcional, paddingBottom: 27.5 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 25 / proporcional}}>
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
                        Shop
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional}}>
                        /
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textDecoration: 'underline', marginRight: 5 / proporcional}}>
                        Categoría
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional}}>
                        /
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textDecoration: 'underline', marginRight: 5 / proporcional}}>
                        Producto
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', marginRight: 5 / proporcional}}>
                        /
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                        Descripción
                    </p>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='' style={{width: '49%', height: 'auto'}}>
                        <ImagenesProducto proporcional={proporcional}/>
                    </div>
                    <div className='' style={{width: '49%', height: 'auto'}}>
                        <DetallesProducto proporcional={proporcional}/>
                    </div>
                </div>
                <CaracteristicasAdicionales proporcional={proporcional}/>
                <ComparacionRapida proporcional={proporcional}/>
                <ProductosRelacionados proporcional={proporcional}/>
            </div>
            <Suscribirse proporcional={proporcional}/>
        </div>
    )
}
