import React, { useState } from 'react'

import image_00 from '../../assets/images/image_nosotros_inspiracion_630.png'

import icono_up_blue from '../../assets/iconos/icono_up_blue_v1_96.png'
import icono_down_black from '../../assets/iconos/icono_down_black_v1_96.png'

export default function InspiracionTablet({proporcional}) {

    const [seleccion_nosotros, setSeleccionNosotros] = useState('mision')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional,
                    background: 'rgb(229, 229, 229)'}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <p className='' 
                    style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                            fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                    Inspiración, innovación <br/> y oportunidades
                </p>
                <p className='' 
                    style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 100 / proporcional, color: 'rgb(102, 102, 102)',
                            fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer'}}>
                    Muchos paquetes de autoedición y editores de páginas web ahora utilizan Lorem Ipsum como texto modelo predeterminado..
                </p>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 60 / proporcional, background: 'white', padding: 20 / proporcional, cursor: 'pointer'}}
                        onClick={() => setSeleccionNosotros(seleccion_nosotros === 'mision' ? '' : 'mision')}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={seleccion_nosotros === 'mision' ? icono_up_blue : icono_down_black} style={{width: 16 / proporcional, height: 16 / proporcional,
                                        margin: 2 / proporcional, marginLeft: 0, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_nosotros === 'mision' ? '#4a9ae9' : 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Misión
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_nosotros === 'mision' ? (
                            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 60 / proporcional, background: 'white', padding: 20 / proporcional, cursor: 'pointer'}}
                        onClick={() => setSeleccionNosotros(seleccion_nosotros === 'vision' ? '' : 'vision')}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={seleccion_nosotros === 'vision' ? icono_up_blue : icono_down_black} style={{width: 16 / proporcional, height: 16 / proporcional,
                                        margin: 2 / proporcional, marginLeft: 0, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_nosotros === 'vision' ? '#4a9ae9' : 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Visión
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_nosotros === 'vision' ? (
                            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        ) : null
                    }
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 60 / proporcional, background: 'white', padding: 20 / proporcional, cursor: 'pointer'}}
                        onClick={() => setSeleccionNosotros(seleccion_nosotros === 'soporte' ? '' : 'soporte')}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={seleccion_nosotros === 'soporte' ? icono_up_blue : icono_down_black} style={{width: 16 / proporcional, height: 16 / proporcional,
                                        margin: 2 / proporcional, marginLeft: 0, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_nosotros === 'soporte' ? '#4a9ae9' : 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Soporte
                            </p>
                        </div>
                    </div>
                    {
                        seleccion_nosotros === 'soporte' ? (
                            <div style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 580 / proporcional}}>
                    <img src={image_00} style={{width: '90%', height: 580 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
