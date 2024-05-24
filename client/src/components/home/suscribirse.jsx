import React, { useState } from 'react'

import icono_email from '../../assets/iconos/icono_send_email_black_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_black_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_black_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_black_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_black_96.png'

export default function Suscribirse({proporcional}) {

    const [email_suscripcion, setEmailSuscripcion] = useState('')

    const [eemail_suscripcion, setEEmailSuscripcion] = useState(false)
    const [boton_suscribirse, setBotonSuscribirse] = useState (false)

    return (
        <div style={{width: '100%', height: 110 / proporcional, marginTop: 50 / proporcional, background: 'rgb(255, 210, 0)', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional }}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 110 / proporcional}}>
                <div style={{width: '30%', height: 110 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 32 / proporcional, marginTop: 39 / proporcional, marginBottom: 39 / proporcional}}>
                        <img src={icono_email} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 20 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Suscríbete a nuestro boletín.
                        </p>
                    </div>
                </div>

                <div className='d-flex justify-content-between' style={{width: '40%', height: 110 / proporcional, paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <input  
                        type='email'
                        className='form-control border-0 rounded-pill'
                        style={{width: '70%', height: 50 / proporcional, background: 'white', color: 'black', fontSize: 16 / proporcional, fontFamily: 'Merryweather Sans, sans-serif'}}
                        placeholder='Tú correo electrónico'
                        value={email_suscripcion}
                        onChange={(event) => setEmailSuscripcion(event.target.value)}
                        id='email_suscripcion'/>
                    <button className='btn rounded-pill' style={{width: '28%', height: 50 / proporcional, background: boton_suscribirse ? 'black' : '#4a9ae9', fontSize: 16 / proporcional,
                        color: 'white', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}} onMouseOver={() => setBotonSuscribirse(true)}
                        onMouseLeave={() => setBotonSuscribirse(false)}>
                        SUSCRIBIRSE
                    </button>
                </div>

                <div style={{width: '30%', height: 110 / proporcional}}>
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto'}}>
                        <img src={icono_facebook} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 43 / proporcional, marginRight: 10, marginLeft: 10 / proporcional}}/>
                        <img src={icono_instagram} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 43 / proporcional, marginRight: 10, marginLeft: 10 / proporcional}}/>
                        <img src={icono_twitter} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 43 / proporcional, marginRight: 10, marginLeft: 10 / proporcional}}/>
                        <img src={icono_tiktok} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 43 / proporcional, marginRight: 10, marginLeft: 0 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
