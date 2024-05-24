import React, { useState } from 'react'

import image_00 from '../../assets/images/image_home_slide_1920_00.png'
import image_01 from '../../assets/images/image_home_slide_1920_01.png'
import image_02 from '../../assets/images/image_home_slide_1920_02.png'

export default function SliderPrincipal({proporcional}) {

    const [boton_slide, setBotonSlide] = useState(false)

    return (
        <div style={{width: '100%', heigth: 650 / proporcional}}>
            <div id='carouselhomeslider' className='carousel slide' data-bs-ride='carousel' style={{width: '100%', height: 650 / proporcional}}>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselhomeslider' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'/>
                    <button type='button' data-bs-target='#carouselhomeslider' data-bs-slide-to='1' aria-label='Slide 2'/>
                    <button type='button' data-bs-target='#carouselhomeslider' data-bs-slide-to='2' aria-label='Slide 3'/>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                        <div className='position-relative' 
                            style={{width: '100%', height: 650 / proporcional, backgroundImage: `url(${image_00})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 300 / proporcional, top: '30%'}}>
                                <p className='' 
                                    style={{fontSize: 38 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                            fontWeight: 400, fontFamily: 'Lora, serif', cursor: 'pointer', }}>
                                    Ahorro máximo solo el lunes
                                </p>
                                <p className='' 
                                    style={{fontSize: 45 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                            fontWeight: 600, fontFamily: 'Noto Serif Georgian, serif', cursor: 'pointer', }}>
                                    Hasta 60% de ahorro
                                </p>
                                <p className='' 
                                    style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'rgb(49, 49, 49)',
                                            fontWeight: 600, fontFamily: 'Merriweather sans, sans-serif', cursor: 'pointer', }}>
                                    Lorem Ipsum is simply dummy text of the printing
                                </p>
                                <button className='rounded-pill btn' style={{width: 150 / proporcional, color: boton_slide === '1' ? 'white' : 'black', 
                                        background: boton_slide === '1' ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                                        fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Merriweather sans, sans-serif'}}
                                        onMouseOver={() => setBotonSlide('1')} onMouseLeave={() => setBotonSlide('')}>
                                    VER MÁS
                                </button>
                            </div> 
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div className='position-relative' 
                            style={{width: '100%', height: 650 / proporcional, backgroundImage: `url(${image_01})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat'}}>
                            <div className='position-absolute' style={{width: 'auto', height: 'auto', left: 300 / proporcional, top: '30%'}}>
                                <p className='' 
                                    style={{fontSize: 38 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                            fontWeight: 400, fontFamily: 'Lora, serif', cursor: 'pointer', }}>
                                    Colección de herramientas y accesorios.
                                </p>
                                <p className='' 
                                    style={{fontSize: 45 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                            fontWeight: 600, fontFamily: 'Noto Serif Georgian, serif', cursor: 'pointer', }}>
                                    Hasta 20% de ahorro
                                </p>
                                <p className='' 
                                    style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'rgb(49, 49, 49)',
                                            fontWeight: 600, fontFamily: 'Merriweather sans, sans-serif', cursor: 'pointer', }}>
                                    Lorem Ipsum is simply dummy text of the printing
                                </p>
                                <button className='rounded-pill btn' style={{width: 150 / proporcional, color: boton_slide === '2' ? 'white' : 'black', 
                                        background: boton_slide === '2' ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                                        fontSize: 16 / proporcional, fontWeight: 500, fontFamily: 'Merriweather sans, sans-serif'}}
                                        onMouseOver={() => setBotonSlide('2')} onMouseLeave={() => setBotonSlide('')}>
                                    VER MÁS
                                </button>
                            </div> 
                        </div>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                        <div style={{width: '100%', height: 650 / proporcional, backgroundImage: `url(${image_02})`, backgroundSize: 'cover', backgroundPosition: 'center', 
                            backgroundRepeat: 'no-repeat'}}>

                        </div>
                    </div>
                </div>
                <button className='carousel-control-prev' type='buton' data-bs-target='#carouselhomeslider' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='buton' data-bs-target='#carouselhomeslider' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'/>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}
