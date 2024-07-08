import React from 'react'

import image_00 from '../../assets/images/image_nosotros_fondo_1920.png'

export default function DatosWebTablet({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: 400 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                backgroundImage: `url(${image_00})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='position-absolute top-0 start-0' style={{width: '100%', height: 400 / proporcional, background: 'rgba(39, 39, 39, 0.8)'}}/>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 200 / proporcional}}>
                <div style={{width: '22%', height: 200 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional, zIndex: 9999}}>
                    <p className='' 
                        style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        18+
                    </p>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Años
                    </p>
                </div>
                <div style={{width: '22%', height: 200 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional, zIndex: 9999}}>
                    <p className='' 
                        style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        200+
                    </p>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Trabajadores
                    </p>
                </div>
                <div style={{width: '22%', height: 200 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional, zIndex: 9999}}>
                    <p className='' 
                        style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        85%
                    </p>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Vista de página
                    </p>
                </div>
                <div style={{width: '22%', height: 200 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional, zIndex: 9999}}>
                    <p className='' 
                        style={{fontSize: 60 / proporcional, lineHeight: `${80 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        27+
                    </p>
                    <p className='' 
                        style={{fontSize: 24 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                        Premios
                    </p>
                </div>
            </div>
        </div>
    )
}
