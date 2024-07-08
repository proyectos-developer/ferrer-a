import React from 'react'

import image_fondo from '../../assets/images/image_home_fondo_anuncio_1320.png'

export default function BannerAnuncio({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' 
                    style={{width: '100%', height: 70 / proporcional, backgroundImage: `url(${image_fondo})`,
                        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, 
                        marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 70 / proporcional}}>
                    <div style={{width: '50%'}}>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Noto Sans Georgian, serif', cursor: 'default'}}>
                            Regalo especial: Hay un regalo cada día de la semana con código de cupón
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%'}}>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Noto Sans Georgian, serif', cursor: 'default', marginRight: 100 / proporcional}}>
                            GARANTÍA <br/>COMERCIAL
                        </p>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${35 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 500, fontFamily: 'Noto Sans Georgian, serif', cursor: 'pointer', textDecoration: 'underline'}}>
                            VER <br/>MÁS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
