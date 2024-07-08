import React from 'react'

import image_fondo from '../../assets/images/image_home_ofertas_1920.png'

export default function MaximoAhorro({proporcional}) {

    return (
        <div style={{width: '100%', height: 650 / proporcional, backgroundImage: `url(${image_fondo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 650 / proporcional}}>
                <div className='position-absolute end-0' style={{width: '45%', height: 'auto', zIndex: 9999, top: '20%'}}>
                    <p className='' 
                        style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 10 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merriweater Sans, sans-serif', cursor: 'default'}}>
                        Ahorro máximo solo el lunes
                    </p>
                    <p className='' 
                        style={{fontSize: 50 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 600, fontFamily: 'Lora, serif', cursor: 'default'}}>
                        Hasta el 60% dcto.
                    </p>
                    <p className='' 
                        style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default'}}>
                        Lorem Ipsum is simply dummy text of the printing...
                    </p>
                    <button className='btn rounded-pill' style={{width: 180 / proporcional, height: 50 / proporcional, background: 'rgb(255, 210, 0)', fontSize: 16 / proporcional,
                        color: 'black', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}}>
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}
