import React from 'react'

import DetallesProductoTablet from './detallesproductotablet.jsx'
import ImagenesProductoTablet from './imagenesproductotablet.jsx'
import CaracteristicasAdicionalesTablet from './caracteristicasadicionalestablet.jsx'
import ComparacionRapidaTablet from './comparacionrapidatablet.jsx'
import ProductosRelacionadosTablet from './productosrelacionadostablet.jsx'
import SuscribirseTablet from '../home/suscribirsetablet.jsx'

export default function ProductoPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 80 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                     background: 'rgb(242, 242, 242)', paddingTop: 27.5 / proporcional, paddingBottom: 27.5 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 25 / proporcional}}>
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
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                    <ImagenesProductoTablet proporcional={proporcional}/>
                </div>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <DetallesProductoTablet proporcional={proporcional}/>
                </div>
                <CaracteristicasAdicionalesTablet proporcional={proporcional}/>
                <ComparacionRapidaTablet proporcional={proporcional}/>
                <ProductosRelacionadosTablet proporcional={proporcional}/>
            </div>
            <SuscribirseTablet proporcional={proporcional}/>
        </div>
    )
}
