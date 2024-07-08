import React, { useState } from 'react'

import image_00 from '../../assets/images/image_tools_600_02.png'
import image_01 from '../../assets/images/image_tools_600_03.png'

export default function HerramientasSegunda({proporcional}) {

    const [boton_imagen, setBotonImagen] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='position-relative' style={{width: '100%', height: 250 / proporcional}}>
                        <img src={image_00} style={{width: '100%', height: 250 / proporcional}}/>
                        <div className='position-absolute top-50 translate-middle' style={{width: 'auto', height: 'auto', left: 300 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default', textAlign: 'left'}}>
                                Mejores herramientas manuales
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'left'}}>
                                Compre la amplia selección de herramientas de Sear para cualquier tarea. Texto ficticio.
                            </p>
                            <div className='d-flex justify-content-start' style={{width: '100%', heigth: 40 / proporcional}}>
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
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '90%', height: 'auto'}}>
                    <div className='position-relative' style={{width: '100%', height: 250 / proporcional}}>
                        <img src={image_01} style={{width: '100%', height: 250 / proporcional}}/>
                        <div className='position-absolute top-50 translate-middle' style={{width: 'auto', height: 'auto', left: 300 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                        fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default', textAlign: 'left'}}>
                                herramientas de medición
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Noto Serif Georgian, serif', cursor: 'default', textAlign: 'left'}}>
                                La tienda busca una amplia selección de herramientas.
                            </p>
                            <div className='d-flex justify-content-start' style={{width: '100%', heigth: 40 / proporcional}}>
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
