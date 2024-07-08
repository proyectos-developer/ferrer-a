import React from 'react'

import icono_location from '../../assets/iconos/icono_location_blue_96.png'
import icono_phone from '../../assets/iconos/icono_phone_blue_96.png'
import icono_email from '../../assets/iconos/icono_email_blue_96.png'
import icono_clock from '../../assets/iconos/icono_clock_blue_96.png'

export default function DatosContactoTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgba(219, 219, 219, 0.8)'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto', padding: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 52 / proporcional, height: 52 / proporcional, marginRight: 22 / proporcional, border: '1px solid rgb(43, 133, 244)'}}>
                            <img src={icono_location} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 15 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 52 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                Lima, Miraflores <br/>Perú
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{width: '48%', height: 'auto', padding: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 52 / proporcional, height: 52 / proporcional, marginRight: 22 / proporcional, border: '1px solid rgb(43, 133, 244)'}}>
                            <img src={icono_phone} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 15 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 52 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                Llámanos <br/> +51 999-xxxxxx
                            </p>
                        </div>
                    </div>
                </div> 
            </div>

            <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '48%', height: 'auto', padding: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 52 / proporcional, height: 52 / proporcional, marginRight: 22 / proporcional, border: '1px solid rgb(43, 133, 244)'}}>
                            <img src={icono_email} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 15 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 52 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                Escríbenos <br/>correo@dominio.com
                            </p>
                        </div>
                    </div>
                </div> 

                <div style={{width: '48%', height: 'auto', padding: 30 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div className='rounded-circle' style={{width: 52 / proporcional, height: 52 / proporcional, marginRight: 22 / proporcional, border: '1px solid rgb(43, 133, 244)'}}>
                            <img src={icono_clock} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 15 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 52 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                Horario atención<br/>10:00a.m - 6:00p.m
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
