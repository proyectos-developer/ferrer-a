import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import icono_shop from '../../assets/iconos/icono_shop_blue_96.png'
import { useDispatch } from 'react-redux'
import { set_modal_carrito } from '../../redux/actions/data'

export default function MenuSuperior({proporcional}) {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
                        <div className='position-relative' style={{width: '20%', height: 'auto'}}
                            onMouseOver={() => setSeleccionMenu('categorias')} onMouseLeave={() => setSeleccionMenu('')}>
                            <div style={{width: '100%', height: 100 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 18 / proporcional, lineHeight: `${100 / proporcional}px`, marginBottom: 0 / proporcional, 
                                            color: (seleccion_menu === 'categorias' || location.pathname.split('/')[1] === 'categorias') ? '#4a9ae9' : 'black',
                                            fontWeight: (seleccion_menu === 'categorias' || location.pathname.split('/')[1] === 'categorias') ? 700 : 500, 
                                            fontFamily: 'Lora, serif', cursor: 'pointer', textAlign: 'left', height: 100 / proporcional}}>
                                    Categorías
                                </p>
                            </div>
                            {
                                seleccion_menu === 'categorias' ? (
                                    <div className='position-absolute shadow rounded' style={{width: 1200 / proporcional, height: 'auto', background: 'white', 
                                            zIndex: 99999, left: -600 / proporcional, top: 100 / proporcional}}>
                                        <div className='d-flex justify-content-between'  style={{width: '100%', height: 'auto'}}>
                                            <div style={{width: '48%', height: 'auto', padding: 30 / proporcional}}>
                                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Llave inglesa
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate('/nuestra-tienda')}>
                                                                Amoladoras angulares
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate('/nuestra-tienda')}>
                                                                Baterías
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate('/nuestra-tienda')}>
                                                                Multi herramientas
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate('/nuestra-tienda')}>
                                                                Amoladoras rectas
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Herramienta de cubierta
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Martillos
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Medida e inspección
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Apiladoras y coratadoras
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Destornilladores
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Herramientas de perforación
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Taladro central
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Conductores de taladros
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Taladros percutores
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Conductores de impacto
                                                            </p>
                                                        </div>
                                                    </div>  
                                                </div>
                                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Herramienta de martillo
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Cortadores de cables
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Abrazaderas de inglete
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Tijeras
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Cortatubos y tuberías
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Sierra mecánica
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Baterías
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Carretes de cables
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Cargadores
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Taladros SDS plus
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div style={{width: '32%', height: 'auto'}}>
                                                        <p className='' 
                                                            style={{fontSize: 14 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                    color: 'black', fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                                            Herramientas de llaves
                                                        </p>
                                                        <div style={{width: '100%', height: 'auto'}}>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Mangueras y carrete de mangueras
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Más piezas de presión
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Boquillas y puntas de pulverización
                                                            </p>
                                                            <p className='' 
                                                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                        color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'left'}}
                                                                        onClick={() => navigate ('/nuestra-tienda')}>
                                                                Bombas de repuesto
                                                            </p>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>

                                            <div style={{width: '48%', height: 'auto', padding: 30 / proporcional, background: '#fafafa'}}>
                                                <p className='' 
                                                    style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 20 / proporcional, 
                                                            color: 'rgb(102, 102, 102)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'center'}}>
                                                    Más vendidos
                                                </p>
                                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                                    <div style={{width: '48%', height: 'auto'}}>
                                                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 19 / proporcional, padding: 15 / proporcional, background: 'white',
                                                                cursor: 'pointer'}}
                                                                        onClick={() => navigate ('/producto/producto/sku')}>
                                                            <div style={{width: 85 / proporcional, height: 102 / proporcional, marginRight: 15 / proporcional, background: '#fafafa'}}/>
                                                            <div style={{width: '100%', height: 102 / proporcional}}>
                                                                <p className='' 
                                                                    style={{fontSize: 13 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 5 / proporcional, 
                                                                            color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    Rapid prop pb131 <br/>Pneumatic <br/>Nailer
                                                                </p>
                                                                <p className='' 
                                                                    style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                            color: 'rgb(0, 0, 0)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    S/. 249
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{width: '48%', height: 'auto'}}>
                                                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 19 / proporcional, padding: 15 / proporcional, background: 'white',
                                                                cursor: 'pointer'}}
                                                                        onClick={() => navigate ('/producto/producto/sku')}>
                                                            <div style={{width: 85 / proporcional, height: 102 / proporcional, marginRight: 15 / proporcional, background: '#fafafa'}}/>
                                                            <div style={{width: '100%', height: 102 / proporcional}}>
                                                                <p className='' 
                                                                    style={{fontSize: 13 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 5 / proporcional, 
                                                                            color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    Dewalt 20V <br/>MAX XR <br/>Hammer Drill
                                                                </p>
                                                                <p className='' 
                                                                    style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                            color: 'rgb(0, 0, 0)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    S/. 125
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                                                    <div style={{width: '48%', height: 'auto'}}>
                                                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 19 / proporcional, padding: 15 / proporcional, background: 'white',
                                                                cursor: 'pointer'}}
                                                                        onClick={() => navigate ('/producto/producto/sku')}>
                                                            <div style={{width: 85 / proporcional, height: 102 / proporcional, marginRight: 15 / proporcional, background: '#fafafa'}}/>
                                                            <div style={{width: '100%', height: 102 / proporcional}}>
                                                                <p className='' 
                                                                    style={{fontSize: 13 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 5 / proporcional, 
                                                                            color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    Dwalt DW616 <br/>Corded Fixed <br/>Base Router
                                                                </p>
                                                                <p className='' 
                                                                    style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                            color: 'rgb(0, 0, 0)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    <span style={{color: 'rgb(102, 102, 102)', textDecoration: 'line-through'}}>s/. 150</span> S/. 145
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{width: '48%', height: 'auto'}}>
                                                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 19 / proporcional, padding: 15 / proporcional, background: 'white',
                                                                cursor: 'pointer'}}
                                                                        onClick={() => navigate ('/producto/producto/sku')}>
                                                            <div style={{width: 85 / proporcional, height: 102 / proporcional, marginRight: 15 / proporcional, background: '#fafafa'}}/>
                                                            <div style={{width: '100%', height: 102 / proporcional}}>
                                                                <p className='' 
                                                                    style={{fontSize: 13 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 5 / proporcional, 
                                                                            color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    BLACK + DECKER<br/>20V Lithium-Ion <br/>Circular Saw
                                                                </p>
                                                                <p className='' 
                                                                    style={{fontSize: 15 / proporcional, lineHeight: `${27 / proporcional}px`, marginBottom: 0 / proporcional, 
                                                                            color: 'rgb(0, 0, 0)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                                                    <span style={{color: 'rgb(102, 102, 102)', textDecoration: 'line-through'}}>s/. 200</span> S/. 175
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }
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
                                        onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                                        onClick={() => navigate ('/contactanos')}>
                                Contáctanos
                            </p>
                        </div>
                    </div>
                </div>
                <div className='' style={{width: '25%', height: 100 / proporcional}}>
                    <div className='d-flex justify-content-end position-relative' style={{width: '100%', heigth: 100 / proporcional}}
                        onClick={() => dispatch(set_modal_carrito(true))}>
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
