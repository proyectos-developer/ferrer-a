import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_shop from '../../assets/iconos/icono_shop_blue_96.png'

export default function MenuSuperior({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState('')

    return (
        <div className='' style={{width: '100%', height: 100 / proporcional, paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, zIndex: 9999}}>
            <div className='d-flex' style={{width: '100%', height: 100 / proporcional}}>
                <div className='' style={{width: '25%', height: 100 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 26 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, color: '#0404e2',
                                fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                onClick={() => navigate ('/')}>
                        FERRETODO
                    </p>
                </div>
                <div className='' style={{width: '50%', height: 100 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 100 / proporcional}}>
                        <div className='' style={{width: '20%', height: 100 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? '#4a9ae9' : 'black',
                                        fontWeight: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === '') ? 700 : 500, 
                                        fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                        onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/')}>
                                Inicio
                            </p>
                        </div>
                        <div className='' style={{width: '20%', height: 100 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: (seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'sobre-nosotros') ? '#4a9ae9' : 'black',
                                        fontWeight: (seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'sobre-nosotros') ? 700 : 500, 
                                        fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                        onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/sobre-nosotros')}>
                                Nosotros
                            </p>
                        </div>
                        <div className='' style={{width: '20%', height: 100 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: (seleccion_menu === 'categorias' || location.pathname.split('/')[1] === 'categorias') ? '#4a9ae9' : 'black',
                                        fontWeight: (seleccion_menu === 'categorias' || location.pathname.split('/')[1] === 'categorias') ? 700 : 500, 
                                        fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                        onMouseOver={() => setSeleccionMenu('categorias')} onMouseLeave={() => setSeleccionMenu('')}>
                                Categorías
                            </p>
                        </div>
                        <div className='' style={{width: '20%', height: 100 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? '#4a9ae9' : 'black',
                                        fontWeight: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 700 : 500, 
                                        fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                        onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate('/nuestra-tienda')}>
                                Tienda
                            </p>
                        </div>
                        <div className='' style={{width: '20%', height: 100 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? '#4a9ae9' : 'black',
                                        fontWeight: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 700 : 500, 
                                        fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}
                                        onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}>
                                Contáctanos
                            </p>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '25%', height: 100 / proporcional}}>
                    <div className='d-flex justify-content-end position-relative' style={{width: '100%', heigth: 100 / proporcional}}>
                        <img src={icono_shop} style={{width: 32 / proporcional, height: 32 / proporcional, marginTop: 34 / proporcional, marginBottom: 34 / proporcional, marginRight: 10 / proporcional, cursor: 'pointer'}}/>
                        <p className='rounded-circle position-absolute' 
                            style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', background: '#1c4c96',
                                    fontWeight: 600, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', width: 20 / proporcional, height: 20 / proporcional, textAlign: 'center',
                                    right: 40 / proporcional, top: 24 / proporcional}}>
                            1
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                            Items
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
