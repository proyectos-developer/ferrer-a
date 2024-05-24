import React, { useState } from 'react'

import icono_star from '../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_yellow_empty_96.png'
import icono_box from '../../assets/iconos/icono_box_black_96.png'
import icono_check_box from '../../assets/iconos/icono_check_box_black_96.png'

import icono_dot from '../../assets/iconos/icono_dot_black_96.png'

import image_descripcion from '../../assets/images/image_producto_descripcion_1320.png'

export default function CaracteristicasAdicionales({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('descripcion')
    const [mouse_over_menu, setMouseOverMenu] = useState ('')

    const [comentarios, setComentarios] = useState('')
    const [nombres, setNombres] = useState('')
    const [correo, setCorreo] = useState('')
    const [check_save, setCheckSave] = useState(false)
    const [boton_enviar, setBotonEnviar] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 80 / proporcional, borderBottom: '1px solid rgb(189, 189, 189)'}}>
                    <div style={{width: '15%', height: 80 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                borderBottom: seleccion_menu === 'descripcion' ? '4px solid #4a9ae9' : null}}>
                        <p className='rounded-pill' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: (seleccion_menu === 'descripcion' || mouse_over_menu === 'descripcion') ? 'black' : 'rgb(189, 189, 189)', textAlign: 'center',
                                    fontWeight: (seleccion_menu === 'descripcion' || mouse_over_menu === 'descripcion') ? 700 : 600, fontFamily: 'Noto Sans Georgian, sans-serif', 
                                    cursor: 'pointer'}} onClick={() => setSeleccionMenu('descripcion')}
                                    onMouseOver={() => setMouseOverMenu('descripcion')} onMouseLeave={() => setMouseOverMenu('')}>
                            Descripción
                        </p>
                    </div>
                    <div style={{width: '15%', height: 80 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                borderBottom: seleccion_menu === 'adicional' ? '4px solid #4a9ae9' : null}}>
                        <p className='rounded-pill' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: (seleccion_menu === 'adicional' || mouse_over_menu === 'adicional') ? 'black' : 'rgb(189, 189, 189)', textAlign: 'center',
                                    fontWeight: (seleccion_menu === 'adicional' || mouse_over_menu === 'adicional') ? 700 :600, fontFamily: 'Noto Sans Georgian, sans-serif', 
                                    cursor: 'pointer'}} onClick={() => setSeleccionMenu('adicional')}
                                    onMouseOver={() => setMouseOverMenu('adicional')} onMouseLeave={() => setMouseOverMenu('')}>
                            Información <br/>adicional
                        </p>
                    </div>
                    <div style={{width: '15%', height: 80 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                borderBottom: seleccion_menu === 'comentarios' ? '4px solid #4a9ae9' : null}}>
                        <p className='rounded-pill' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: (seleccion_menu === 'comentarios' || mouse_over_menu === 'comentarios') ? 'black' : 'rgb(189, 189, 189)', textAlign: 'center',
                                    fontWeight: (seleccion_menu === 'comentarios' || mouse_over_menu === 'comentarios') ? 700 :600, fontFamily: 'Noto Sans Georgian, sans-serif', 
                                    cursor: 'pointer'}} onClick={() => setSeleccionMenu('comentarios')}
                                    onMouseOver={() => setMouseOverMenu('comentarios')} onMouseLeave={() => setMouseOverMenu('')}>
                            Comentarios (1)
                        </p>
                    </div>
                    <div style={{width: '15%', height: 80 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                borderBottom: seleccion_menu === 'caracteristicas' ? '4px solid #4a9ae9' : null}}>
                        <p className='rounded-pill' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: (seleccion_menu === 'caracteristicas' || mouse_over_menu === 'caracteristicas') ? 'black' : 'rgb(189, 189, 189)', textAlign: 'center',
                                    fontWeight: (seleccion_menu === 'caracteristicas' || mouse_over_menu === 'caracteristicas') ? 700 :600, fontFamily: 'Noto Sans Georgian, sans-serif', 
                                    cursor: 'pointer'}} onClick={() => setSeleccionMenu('caracteristicas')}
                                    onMouseOver={() => setMouseOverMenu('caracteristicas')} onMouseLeave={() => setMouseOverMenu('')}>
                            Características
                        </p>
                    </div>
                    <div style={{width: '15%', height: 80 / proporcional, paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional,
                                borderBottom: seleccion_menu === 'devolucion' ? '4px solid #4a9ae9' : null}}>
                        <p className='rounded-pill' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: (seleccion_menu === 'devolucion' || mouse_over_menu === 'devolucion') ? 'black' : 'rgb(189, 189, 189)', textAlign: 'center',
                                    fontWeight: (seleccion_menu === 'devolucion' || mouse_over_menu === 'devolucion') ? 700 :600, fontFamily: 'Noto Sans Georgian, sans-serif', 
                                    cursor: 'pointer'}} onClick={() => setSeleccionMenu('devolucion')}
                                    onMouseOver={() => setMouseOverMenu('devolucion')} onMouseLeave={() => setMouseOverMenu('')}>
                            Envío <br/>y devolución
                        </p>
                    </div>
                </div>
            </div>
            {
                seleccion_menu === 'descripcion' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                STANLEY STXH2000 200W Pistola de calor de velocidad variable
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                Este dispositivo manual eléctrico de Stanley está diseñado para soplar aire caliente a diferentes temperaturas. Esto se puede utilizar para quitar pintura, tubos termorretráctiles, descongelar tuberías, doblar plástico y ablandar pegamento. Esta pistola de calor con cable puede satisfacer sus necesidades y permitirle realizar su trabajo con precisión.
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Pistola de calor de doble temperatura.
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                Este dispositivo manual eléctrico de Stanley está diseñado para soplar aire caliente a diferentes temperaturas. Esto se puede utilizar para quitar pintura, tubos termorretráctiles, descongelar tuberías, doblar plástico y ablandar pegamento. Esta pistola de calor con cable puede satisfacer sus necesidades y permitirle realizar su trabajo con precisión.
                            </p>
                            <div style={{width: '100%', height: 500 / proporcional, backgroundImage: `url(${image_descripcion})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat', marginBottom: 20 / proporcional}}>
                                <div className='position-relative' style={{width:'100%', height: 500 / proporcional, background: 'rgba(255, 210, 0, 0.4)'}}>
                                    <div className='position-absolute top-50 start-50 translate-middle' style={{width: 'auto', height: 'auto'}}>
                                        <p className='' 
                                            style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                                    fontWeight: 600, fontFamily: 'Noto Serif Georgian, serif', textAlign: 'left'}}>
                                            HERRAMIENTAS DE CONSTRUCCIÓN
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                                    fontWeight: 400, fontFamily: 'Merriweather, sans-serif', textAlign: 'left'}}>
                                            Kit de herramientas manuales adeco: alicates de alta resistencia (pilash), cortador, probador, destornillador.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Opción manos libres
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                El mango de diseño ergonómico garantiza un agarre cómodo mientras trabaja. Cuenta con un gatillo de bloqueo para operación con manos libres. es muy conveniente y admite una amplia gama de aplicaciones.
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Diseño compacto
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                Esta pistola está diseñada de tal manera que le ayuda a apuntar hacia la fuente con facilidad. Esta máquina se puede utilizar para diversas tareas domésticas y también con fines industriales. Es perfecto tanto para trabajos ligeros como pesados.
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', border: '1px solid rgb(229, 229, 229)'}}>
                            <div style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <p className='' 
                                    style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                    Detalles técnicos
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Fabricante
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Mallcom India LImited, Kolkata, West Bengal
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Ciudad de origen
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        India
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Número de modelo
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Diamond xiii_bl_rcht
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        ASIN
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        B093BRW6P6
                                    </p>
                                </div>
                            </div>
                            <div style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <p className='' 
                                    style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                    Información adicional
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Fabricante
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Mallcom India LImited, Kolkata, West Bengal, Mallcom India Limited,, Kolkata, West Bengal
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Empacador
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Mallcom India Limited,, Kolkata, West Bengal
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Peso
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        1kg
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Dimensiones
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        LxWxH 20 x 29.5 x 16 centimetros
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)'}}>
                                <div style={{width: '20%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Nombre genérico
                                    </p>
                                </div>
                                <div style={{width: '80%', height: 30 / proporcional}}>
                                    <p className='' 
                                        style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                        Casco de seguridad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : seleccion_menu === 'adicional' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                            <div style={{width: '100%', height: 'auto', border: '1px solid rgb(229, 229, 229)'}}>
                                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'white', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                    <div style={{width: '20%', height: 30 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                            Peso
                                        </p>
                                    </div>
                                    <div style={{width: '80%', height: 30 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                            1 kg
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, padding: 15 / proporcional, background: 'rgb(247, 247, 247)', borderBottom: '1px solid rgb(229, 229, 229)'}}>
                                    <div style={{width: '20%', height: 30 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 700, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                            Color
                                        </p>
                                    </div>
                                    <div style={{width: '80%', height: 30 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a9ae9',
                                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                            Azul, verde, rojo, amarillo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : seleccion_menu === 'comentarios' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                <div style={{width: '58%', height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                                fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                        1 Valoración en amoladora angular black + decker BDEG
                                    </p>
                                    <div className='rounded' style={{width: '100%', height: 'auto', border: '1px solid rgb(229, 229, 229)', padding: 20 / proporcional}}>
                                        <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                            <div className='rounded-pill' style={{width: 60 / proporcional, height: 60 / proporcional, background: 'rgb(189, 189, 189)', marginRight: 20 / proporcional}}/>
                                            <div style={{width: '80%', height: 'auto'}}>
                                                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                                                    <div className='d-flex justify-content-start' style={{width: '48%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(136, 136, 136)',
                                                                    fontWeight: 600, fontFamily: 'Lora, serif'}}>
                                                            Jessica <span style={{fontWeight: 500}}>- Octubre 10, 2022</span>
                                                        </p>
                                                    </div>
                                                    <div className='d-flex justify-content-end' style={{width: '48%', height: 'auto'}}>
                                                        <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                                        <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                                        <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                                        <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                                        <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional}}/>
                                                    </div>
                                                </div>
                                                <p className='' 
                                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 30 / proporcional, color: 'rgb(102, 102, 102)',
                                                            fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}>
                                                    Esta esterilla es apta para yoga. Es grueso para que no te lastimes los tobillos ni los codos mientras haces yoga. Un poco resbaladizo pero se puede manejar. Deja una marca si las uñas de los pies son largas. Valor por dinero
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '40%', height: 'auto'}}>
                                    <p className='' 
                                        style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                                fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                        Agregar un comentario
                                    </p>
                                    <div className='rounded' style={{width: '100%', height: 'auto', background: 'rgb(229, 229, 229)', padding: 20 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 12 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                            Tu email no será publicado. Campos requeridos estan marcados con •
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                            Tu calificación <span style={{color: 'red'}}>•</span>
                                        </p>
                                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional, marginBottom: 20 / proporcional}}>
                                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, cursor: 'pointer',
                                                    marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, cursor: 'pointer',
                                                    marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, cursor: 'pointer',
                                                    marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, cursor: 'pointer',
                                                    marginRight: 5 / proporcional}}/>
                                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, cursor: 'pointer'}}/>
                                        </div>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                            Tu comentario <span style={{color: 'red'}}>•</span>
                                        </p>
                                        <textarea 
                                            style={{width: '100%', height: 100 / proporcional, fontSize: 16 / proporcional, background: 'white', color: 'rgb(102, 102, 102)',
                                                    border: '1px solid rgb(229, 229, 229)', marginBottom: 10 / proporcional}}
                                            value={comentarios}
                                            rows={3}
                                            onChange={(event) => setComentarios(event.target.value)}
                                            id='comentarios'
                                            placeholder=''
                                            className='form-control'/>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                            Nombres <span style={{color: 'red'}}>•</span>
                                        </p>
                                        <input 
                                            type='default'
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, background: 'white', color: 'rgb(102, 102, 102)',
                                                    border: '1px solid rgb(229, 229, 229)', marginBottom: 10 / proporcional}}
                                            value={nombres}
                                            onChange={(event) => setNombres(event.target.value)}
                                            id='nombres'
                                            placeholder=''
                                            className='form-control'/>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                            Correo <span style={{color: 'red'}}>•</span>
                                        </p>
                                        <input 
                                            type='email'
                                            style={{width: '100%', height: 50 / proporcional, fontSize: 16 / proporcional, background: 'white', color: 'rgb(102, 102, 102)',
                                                    border: '1px solid rgb(229, 229, 229)', marginBottom: 10 / proporcional}}
                                            value={correo}
                                            onChange={(event) => setCorreo(event.target.value)}
                                            id='correo'
                                            placeholder=''
                                            className='form-control'/>
                                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional, marginBottom: 10 / proporcional}}>
                                            <img src={check_save ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional,
                                                        cursor: 'pointer'}}
                                                onClick={() => setCheckSave(!check_save)}/>
                                            <p className='' 
                                                style={{fontSize: 14 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                                Guardar mi nombre, correo, y página web en este navegador para la próxima vez que comente.
                                            </p>    
                                        </div>
                                        <button className='btn rounded-pill' 
                                            style={{width: '40%', height: 50 / proporcional, background: boton_enviar ? '#4a9ae9' : 'rgb(255, 210, 0)', fontSize: 16 / proporcional, color: boton_enviar ? 'white' : 'black'}}
                                                onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}>
                                            Enviar comentarios
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : seleccion_menu === 'caracteristicas' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Encontrar el ajuste perfecto es esencial para un guardarropa cómodo y favorecedor. Para ayudarle a seleccionar la talla correcta, hemos compilado guías de tallas completas para ropa de hombre y de mujer. Consulte la siguiente información para garantizar un ajuste perfecto en todo momento.
                            </p>
                        </div>
                    </div>
                ) : seleccion_menu === 'devolucion' ? (
                    <div style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Política de envío
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                At our Company, we understand the importance of timely delivery. We offer a variety of shipping options to suit your needs, including standard, expedited, and express shipping. Our dedicated team works diligently to process and dispatch your orders promptly, aiming to deliver them to your doorstep within the estimated timeframe.
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                We strive to provide fast and reliable shipping to our customers. Here's everything you need to know about our shipping process:
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Envío: dentro de 24 horas
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Envío gratuito en todos los productos con una compra mínima de $99.
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Tiempo de entrega internacional 5 a 7 días hábiles.
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    El pago contra reembolso podría estar disponible.
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Devoluciones y cambios sencillos en 30 días
                                </p>
                            </div>  
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                Tenga en cuenta que los tiempos de entrega son estimados y pueden variar según factores como la disponibilidad del producto, el destino y el retraso del transportista.
                            </p>
                            <p className='' 
                                style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                        fontWeight: 700, fontFamily: 'Noto Sans Georgian, sans-serif'}}>
                                Política de retorno
                            </p>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                Queremos que quede completamente satisfecho con su compra en nuestro sitio web. Si por alguna razón no está completamente satisfecho con su pedido, estamos aquí para ayudarlo. Es posible que se apliquen ciertas exclusiones y condiciones, por lo que le recomendamos que revise nuestra política de devoluciones detallada para obtener más información. Tenga la seguridad de que nuestro objetivo es garantizar su completa satisfacción con cada compra que realice en nuestro sitio web.
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Los artículos devueltos deben estar sin usar, sin daños y en las mismas condiciones en que se recibieron.
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Las etiquetas, etiquetas y embalajes originales deben estar intactos e incluidos con el artículo devuelto.
                                </p>
                            </div>  
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <img src={icono_dot} style={{width: 18 / proporcional, height: 18 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                <p className='' 
                                    style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                            fontWeight: 500, fontFamily: 'Meriweather Sans, sans-serif'}}>
                                    Se requiere prueba de compra, como la confirmación o el recibo de su pedido, para todas las devoluciones.
                                </p>
                            </div>  
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
