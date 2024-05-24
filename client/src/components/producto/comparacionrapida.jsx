import React, { useState } from 'react'

import icono_star from '../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_yellow_empty_96.png'

export default function ComparacionRapida({proporcional}) {

    const [boton_carrito, setBotonCarrito] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex' style={{width: '100%', height: 320 / proporcional, background: 'rgb(229, 229, 229)'}}>
                    <div style={{width: '12%', height: 350 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${350 / proporcional}px`, marginBottom: 0 / proporcional, color: 'blac',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Imagen
                        </p>
                    </div>
                    <div style={{width: '22%', height: 350 / proporcional}}>
                        <div style={{width: '100%', height: 80 / proporcional, padding: 15 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'blac',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                BLACK+DECKER <br/>Angle Grinder BDEG400
                            </p>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 350 / proporcional}}>
                        <div style={{width: '100%', height: 80 / proporcional, padding: 15 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'blac',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                DeWalt D55151 Electric Hand<br/> Carry Air Compressor
                            </p>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 350 / proporcional}}>
                        <div style={{width: '100%', height: 80 / proporcional, padding: 15 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'blac',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Porter Cable PCCK640 <br/>Impact Driver
                            </p>
                        </div>                        
                    </div>
                    <div style={{width: '22%', height: 350 / proporcional}}>
                        <div style={{width: '100%', height: 80 / proporcional, padding: 15 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'blac',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                High Horsepower High <br/>Balance Air Sander
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: 'white'}}>
                    <div style={{width: '12%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Rating
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 30 / proporcional}}>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional}}/>
                        </div>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: 'rgb(229, 229, 229)'}}>
                    <div style={{width: '12%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Precio
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            $23 - $28
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            $120 - 415
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            $415
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            $319
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 80 / proporcional, background: 'white'}}>
                    <div style={{width: '12%', height: 80 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Agregar a carrito
                        </p>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '22%', height: 80 / proporcional, padding: 15 / proporcional}}>
                        <button className='btn rounded-pill' style={{width: '80%', height: 50 / proporcional, fontSize: 20 / proporcional, color: boton_carrito === '1' ? 'white' : 'black',
                                background: boton_carrito === '1' ? '#4a9ae9' : 'rgb(255, 210, 0)'}} 
                                onMouseOver={() => setBotonCarrito ('1')} onMouseLeave={() => setBotonCarrito('')}>
                            VER OPCIONES
                        </button>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '22%', height: 80 / proporcional, padding: 15 / proporcional}}>
                        <button className='btn rounded-pill' style={{width: '80%', height: 50 / proporcional, fontSize: 20 / proporcional, color: boton_carrito === '2' ? 'white' : 'black',
                                background: boton_carrito === '2' ? '#4a9ae9' : 'rgb(255, 210, 0)'}} 
                                onMouseOver={() => setBotonCarrito ('2')} onMouseLeave={() => setBotonCarrito('')}>
                            VER OPCIONES
                        </button>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '22%', height: 80 / proporcional, padding: 15 / proporcional}}>
                        <button className='btn rounded-pill' style={{width: '80%', height: 50 / proporcional, fontSize: 20 / proporcional, color: boton_carrito === '3' ? 'white' : 'black',
                                background: boton_carrito === '3' ? '#4a9ae9' : 'rgb(255, 210, 0)'}} 
                                onMouseOver={() => setBotonCarrito ('3')} onMouseLeave={() => setBotonCarrito('')}>
                            VER OPCIONES
                        </button>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '22%', height: 80 / proporcional, padding: 15 / proporcional}}>
                        <button className='btn rounded-pill' style={{width: '80%', height: 50 / proporcional, fontSize: 20 / proporcional, color: boton_carrito === '4' ? 'white' : 'black',
                                background: boton_carrito === '4' ? '#4a9ae9' : 'rgb(255, 210, 0)'}} 
                                onMouseOver={() => setBotonCarrito ('4')} onMouseLeave={() => setBotonCarrito('')}>
                            VER OPCIONES
                        </button>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 60 / proporcional, background: 'rgb(229, 229, 229)'}}>
                    <div style={{width: '12%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Disponibilidad
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            310 en stock
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            428 en stock
                        </p>
                    </div>
                    <div style={{width: '22%', height: 60 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            223 en stock
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 100 / proporcional, background: 'white'}}>
                    <div style={{width: '12%', height: 100 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Información <br/>adicional
                        </p>
                    </div>
                    <div style={{width: '22%', height: 100 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Peso <span style={{fontWeight: 500, color: 'rgb(102, 102, 102)'}}>1 kg</span>
                        </p>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Color <span style={{fontWeight: 500, color: '#4a9ae9', marginLeft: 5 / proporcional, fontSize: 16 / proporcional}}>Azul, verde, rojo, amarillo</span>
                        </p>
                    </div>
                    <div style={{width: '22%', height: 100 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            
                        </p>
                    </div>
                    <div style={{width: '22%', height: 100 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Peso <span style={{fontWeight: 500, color: 'rgb(102, 102, 102)'}}>1 kg</span>
                        </p>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Color <span style={{fontWeight: 500, color: '#4a9ae9', marginLeft: 5 / proporcional, fontSize: 16 / proporcional}}>Azul, amarillo</span>
                        </p>
                    </div>
                    <div style={{width: '22%', height: 100 / proporcional, padding: 15 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Peso <span style={{fontWeight: 500, color: 'rgb(102, 102, 102)'}}>1 kg</span>
                        </p>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Color <span style={{fontWeight: 500, color: '#4a9ae9', marginLeft: 5 / proporcional, fontSize: 16 / proporcional}}>Azul, naranja</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
