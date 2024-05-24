import React, { useState } from 'react'

export default function Informacion({proporcional}) {

    const [boton_contacto, setBotonContacto] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 200 / proporcional, paddingRight: 200 / proporcional}}>
                <p className='' 
                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                    Contáctanos
                </p>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 60 / proporcional, color: 'black',
                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                    Acerca de nosotros
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 60 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                    It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here.
                </p>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <button className='btn rounded-pill' style={{width: 300 / proporcional, height: 50 / proporcional, background: boton_contacto ? '#4a9ae9' : 'rgb(255, 210, 0)', fontSize: 20 / proporcional,
                            color: boton_contacto ? 'white' : 'black'}} onMouseOver={() => setBotonContacto(true)} onMouseLeave={() => setBotonContacto(false)}>
                        Contáctarnos
                    </button>
                </div>
            </div>
        </div>
    )
}
