import React from 'react'

import MapaUbicacion from './mapaubicacion.jsx'
import Formulario from './formulario.jsx'
import DatosContacto from './datoscontacto.jsx'
import Suscribirse from '../home/suscribirse.jsx'

export default function ContactanosPanel({proporcional}) {

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
                                Contáctanos
                            </p>
                        </div>
                        <p className='' 
                            style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                            CONTÁCTANOS
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 80 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '58%', height: 'auto'}}>
                        <MapaUbicacion proporcional={proporcional}/>
                    </div>
                    <div style={{width: '40%', height: 'auto'}}>
                        <Formulario proporcional={proporcional}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingBottom: 30 / proporcional, marginBottom: 48 / proporcional}}>
                <DatosContacto proporcional={proporcional}/>
            </div>
            <Suscribirse proporcional={proporcional}/>
        </div>
    )
}
