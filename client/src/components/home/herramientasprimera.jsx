import React, { useState } from 'react'

import image_00 from '../../assets/images/image_tools_600_00.png'
import image_01 from '../../assets/images/image_tools_600_01.png'

export default function HerramientasPrimera({proporcional}) {

    const [boton_imagen, setBotonImagen] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div className='position-relative' style={{width: '100%', height: 250 / proporcional}}>
                        <img src={image_00} style={{width: '100%', height: 250 / proporcional}}/>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default', textAlign: 'center'}}>
                                Herramientas para vender
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'center'}}>
                                La tienda busca una amplia selección de herramientas.
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', heigth: 40 / proporcional}}>
                                <button className='rounded-pill btn' style={{width: 150 / proporcional, color: boton_imagen === '1' ? 'white' : 'black', 
                                        background: boton_imagen === '1' ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                                        fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Merriweather sans, sans-serif'}}
                                        onMouseOver={() => setBotonImagen('1')} onMouseLeave={() => setBotonImagen('')}>
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '48%', height: 'auto'}}>
                    <div className='position-relative' style={{width: '100%', height: 250 / proporcional}}>
                        <img src={image_01} style={{width: '100%', height: 250 / proporcional}}/>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default', textAlign: 'center'}}>
                                Accesorias de herramientas
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'center'}}>
                                La tienda busca una amplia selección de herramientas.
                            </p>
                            <div className='d-flex justify-content-center' style={{width: '100%', heigth: 40 / proporcional}}>
                                <button className='rounded-pill btn' style={{width: 150 / proporcional, color: boton_imagen === '2' ? 'white' : 'black', 
                                        background: boton_imagen === '2' ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                                        fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Merriweather sans, sans-serif'}}
                                        onMouseOver={() => setBotonImagen('2')} onMouseLeave={() => setBotonImagen('')}>
                                    VER MÁS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
