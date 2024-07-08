import React, { useState } from 'react'

import icono_plus from '../../assets/iconos/icono_plus_black_96.png'
import icono_minus from '../../assets/iconos/icono_minus_black_96.png'

import icono_star from '../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_yellow_empty_96.png'

export default function FiltrosTablet({proporcional}) {

    const [filtrar_categorias, setFiltrarCategorias] = useState (true)
    const [filtrar_destacados, setFiltrarDestacados] = useState (true)
    const [filtrar_color, setFiltrarColor] = useState (true)
    const [filtrar_precio, setFiltrarPrecio] = useState (true)
    const [filtrar_calificacion, setFiltrarCalificacion] = useState (true)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>

                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(224, 224, 224)', marginBottom: 20 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Filtrar categorias
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={filtrar_categorias ? icono_minus : icono_plus} style={{width: 30 / proporcional, height: 30 / proporcional, cursor: 'pointer', padding: 8 / proporcional}}
                                onClick={() => setFiltrarCategorias(!filtrar_categorias)}/>
                        </div>
                    </div>
                    <div className='overflow-auto' style={{width: '100%', height: 250 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Nuestra tienda (24)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Sierra circular (18)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Herramienta de cubierta (18)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Herramienta de taladro (27)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Martillo (20)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Llave inglesa (18)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Sierra mecánica (27)
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Herramienta de llave (22)
                        </p>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(224, 224, 224)', marginBottom: 20 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Filtrar por destacados
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={filtrar_categorias ? icono_minus : icono_plus} style={{width: 30 / proporcional, height: 30 / proporcional, cursor: 'pointer', padding: 8 / proporcional}}
                                onClick={() => setFiltrarDestacados(!filtrar_destacados)}/>
                        </div>
                    </div>
                    <div className='overflow-auto' style={{width: '100%', height: 250 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Todos los producto
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Mejores calificados
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Nuevos productos
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Más vendidos
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Mejores productos
                        </p>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(224, 224, 224)', marginBottom: 20 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Filtrar por color
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={filtrar_categorias ? icono_minus : icono_plus} style={{width: 30 / proporcional, height: 30 / proporcional, cursor: 'pointer', padding: 8 / proporcional}}
                                onClick={() => setFiltrarColor(!filtrar_color)}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 40 / proporcional, marginBottom: 20 / proporcional}}>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'black'}}/>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'blue'}}/>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'grey'}}/>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'green'}}/>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'yellow'}}/>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'red'}}/>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 40 / proporcional}}>
                        <div className='rounded-circle' style={{width: 40 / proporcional, height: 40 / proporcional, background: 'orange'}}/>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(224, 224, 224)', marginBottom: 20 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Filtrar por precio
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={filtrar_categorias ? icono_minus : icono_plus} style={{width: 30 / proporcional, height: 30 / proporcional, cursor: 'pointer', padding: 8 / proporcional}}
                                onClick={() => setFiltrarPrecio(!filtrar_precio)}/>
                        </div>
                    </div>
                    <div className='overflow-auto' style={{width: '100%', height: 250 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            Todos
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            $0 - $130
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            $130 - $260
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            $260 - $390
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            $390 - $520
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                            $520 +
                        </p>
                    </div>
                </div>

                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(224, 224, 224)', marginBottom: 20 / proporcional}}>
                        <div style={{width: '80%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                                Filtrar por calificacion
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '20%', height: 'auto'}}>
                            <img src={filtrar_categorias ? icono_minus : icono_plus} style={{width: 30 / proporcional, height: 30 / proporcional, cursor: 'pointer', padding: 8 / proporcional}}
                                onClick={() => setFiltrarCalificacion(!filtrar_calificacion)}/>
                        </div>
                    </div>
                    <div className='overflow-auto' style={{width: '100%', height: 250 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (11)
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (13)
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (0)
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (0)
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (0)
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 40 / proporcional}}>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 40 / proporcional, height: 40 / proporcional, padding: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left'}}>
                                (0)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
