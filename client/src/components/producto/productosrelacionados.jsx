import React from 'react'

import CardProducto from '../home/card/producto'

export default function ProductosRelacionados({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex' style={{width: '100%', heigth: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 28 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', marginRight: 50 / proporcional,
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Productos relacionados
                    </p>
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
