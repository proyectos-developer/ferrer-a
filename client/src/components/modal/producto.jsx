import React from 'react'

import {useDispatch} from 'react-redux'

import icono_right from '../../assets/iconos/icono_right_white_96.png'
import icono_left from '../../assets/iconos/icono_left_white_96.png'
import icono_close from '../../assets/iconos/icono_close_black_96.png'

import icono_star from '../../assets/iconos/icono_star_yellow_96.png'
import icono_star_empty from '../../assets/iconos/icono_star_yellow_empty_96.png'

import {set_modal_producto} from '../../redux/actions/data.js'

export default function ModalProducto({proporcional}) {

    const dispatch = useDispatch ()

    return (
        <div className='position-absolute top-0 start-0' style={{width: '100%', height: '100%', background: 'rgb(39, 39, 39, 0.6)'}}>
            <div className='position-fixed top-50 start-50 translate-middle shadow rounded' style={{width: 920 / proporcional, height: 460 / proporcional, background: 'white', zIndex: 9999}}>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: 460 / proporcional, height: 460 / proporcional}}>
                        <div id='carouselmodalproducto position-relative' className='carousel slide' data-bs-ride='carousel' style={{width: 460 / proporcional, height: 460 / proporcional}}>
                            <div className='carousel-indicators d-flex justify-content-center' style={{width: 460 / proporcional, marginLeft: 0, marginRight: 0}} >
                                <button data-bs-target='#carouselmodalproducto' data-bs-slide-to='0' className='active rounde-circle' aria-current='true' aria-label='Slide 1' 
                                    style={{width: 10 / proporcional, height: 10 / proporcional}}/>
                                <button data-bs-target='#carouselmodalproducto' data-bs-slide-to='1' aria-label='Slide 2' 
                                    style={{width: 10 / proporcional, height: 10 / proporcional}} className='rounded-circle'/>
                                <button data-bs-target='#carouselmodalproducto' data-bs-slide-to='2' aria-label='Slide 3' 
                                    style={{width: 10 / proporcional, height: 10 / proporcional}} className='rounded-circle'/>
                                <button data-bs-target='#carouselmodalproducto' data-bs-slide-to='3' aria-label='Slide 4' 
                                    style={{width: 10 / proporcional, height: 10 / proporcional}} className='rounded-circle'/>
                                <button data-bs-target='#carouselmodalproducto' data-bs-slide-to='4' aria-label='Slide 5' 
                                    style={{width: 10 / proporcional, height: 10 / proporcional}} className='rounded-circle'/>
                            </div>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <div style={{width: 460 / proporcional, height: 460 / proporcional, background: 'rgba(39, 39, 39, 0.6)'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <div style={{width: 460 / proporcional, height: 460 / proporcional, background: 'rgba(139, 139, 139, 0.6)'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <div style={{width: 460 / proporcional, height: 460 / proporcional, background: 'rgba(89, 89, 89, 0.6)'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <div style={{width: 460 / proporcional, height: 460 / proporcional, background: 'rgba(189, 189, 189, 0.6)'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <div style={{width: 460 / proporcional, height: 460 / proporcional, background: 'rgba(0, 0, 0, 0.6)'}}/>
                                </div>
                            </div>
                                <div className='position-absolute top-50' style={{width: 20 / proporcional, height: 20 / proporcional, left: 20 / proporcional, zIndex: 9999, cursor: 'pointer'}}
                                     data-bs-target='#carouselmodalproducto' data-bs-slide='prev'>
                                    <img src={icono_left} style={{width: 20 / proporcional, height: 20 / proporcional, curosr: 'pointer'}}/>
                                </div>
                                <div className='position-absolute top-50' style={{width: 20 / proporcional, height: 20 / proporcional, right: 20 / proporcional, zIndex: 9999, cursor: 'pointer'}}
                                     data-bs-target='#carouselmodalproducto' data-bs-slide='next'>
                                    <img src={icono_right} style={{width: 20 / proporcional, height: 20 / proporcional, curosr: 'pointer'}}/>
                                </div>
                        </div>
                    </div>
                    <div style={{width: 460 / proporcional, height: 460 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 20 / proporcional}}>
                            <img src={icono_close} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 2, cursor: 'pointer'}}
                                onClick={() => dispatch(set_modal_producto(false))}/>
                        </div>
                        <div style={{width: '100%', height: 'auto', padding: 20 / proporcional, paddingTop: 0 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default'}}>
                                Producto descripción
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <div className='d-flex' style={{width: 'auto', height: 20 / proporcional, marginRight: 10 / proporcional}}>
                                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional, marginRight: 5 / proporcional}}/>
                                    <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, padding: 1 / proporcional}}/>
                                </div>
                                <p className='' 
                                    style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                            fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textDecoration: 'underline'}}>
                                    (1 comentario cliente)
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', marginRight: 10 / proporcional}}>
                                    $269
                                </p>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', marginRight: 10 / proporcional}}>
                                    -
                                </p>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                    $289
                                </p>
                            </div>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                Excelente poder para clavar consistentemente los clavos hasta la superficie en maderas duras. La tecnología de clavos listos para disparar elimina el tiempo de aceleración entre cada descarga de clavos.
                            </p>
                            <p className='' 
                                style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 10 / proporcional, color: 'black',
                                        fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                Color
                            </p>
                            <div className='d-flex justify-content-between' style={{width: '60%', height: 60 / proporcional, marginBottom: 10 / proporcional}}>
                                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '22%', height: 60 / proporcional}}>
                                    <div className='rounded' style={{width: 60 / proporcional, height: 60 / proporcional, border: '1px solid rgb(139, 139, 139)'}}/>
                                </div>
                            </div>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 10 / proporcional, color: '#4a9ae9',
                                        fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textDecoration: 'underline'}}>
                                Limpiar
                            </p>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(139, 139, 139)',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', marginRight: 10 / proporcional, textDecoration: 'line-through'}}>
                                    $269
                                </p>
                                <p className='' 
                                    style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                            fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                    $289
                                </p>
                            </div>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a9ae9',
                                        fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                                230 en stock
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
