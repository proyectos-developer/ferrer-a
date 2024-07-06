import React, { useState } from 'react'

import icono_radio_empty from '../../assets/iconos/icono_radio_empty_grey_96.png'
import icono_radio_button from '../../assets/iconos/icono_radio_button_grey_96.png'

export default function TotalCarrito({proporcional}) {

    const [boton_pagar, setBotonPagar] = useState(false)

    const [envio, setEnvio] = useState(false)
    const [tasa, setTasa] = useState(false)
    const [local, setLocal] = useState(false)

    const proceder_pagar = () => {

    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <p className='' 
                style={{fontSize: 28 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 14 / proporcional, color: 'rgb(0, 0, 0)',
                        fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                Total Carrito
            </p>
            <div style={{width: '100%', height: 'auto', marginBottom: 6 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(102, 102, 102)'}}>
                    <div style={{width: '38%', height: 40 / proporcional, padding: 12 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Subtotal
                        </p>
                    </div>
                    <div style={{width: '60%', height: 40 / proporcional, padding: 12 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            S/. 110
                        </p>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', borderBottom: '1px solid rgb(102, 102, 102)'}}>
                    <div style={{width: '38%', height: 'auto', padding: 12 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Envío
                        </p>
                    </div>
                    <div style={{width: '60%', height: 'auto', padding: 12 / proporcional}}>
                        <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 7 / proporcional, cursor: 'pointer'}}
                            onClick={() => setEnvio(!envio)}>
                            <img src={envio ? icono_radio_button : icono_radio_empty} style={{width: 16 / proporcional, height: 16 / proporcional, padding: 2 / proporcional, marginRight: 8 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Envío
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 7 / proporcional, cursor: 'pointer'}}
                            onClick={() => setTasa(!tasa)}>
                            <img src={tasa ? icono_radio_button : icono_radio_empty} style={{width: 16 / proporcional, height: 16 / proporcional, padding: 2 / proporcional, marginRight: 8 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Tasa flota
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 7 / proporcional, cursor: 'pointer'}}
                            onClick={() => setLocal(!local)}>
                            <img src={local ? icono_radio_button : icono_radio_empty} style={{width: 16 / proporcional, height: 16 / proporcional, padding: 2 / proporcional, marginRight: 8 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                        fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Recoger localmente
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 7 / proporcional}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                        fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                                Envío a...
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 16 / proporcional, marginBottom: 7 / proporcional, cursor: 'pointer'}}>
                            <p className='' 
                                style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(43, 133, 244)',
                                        fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer'}}>
                                Cambiar dirección
                            </p>
                        </div>
                    </div>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '38%', height: 40 / proporcional, padding: 12 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            Total
                        </p>
                    </div>
                    <div style={{width: '60%', height: 40 / proporcional, padding: 12 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(0, 0, 0)',
                                    fontWeight: 700, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                            S/. 110
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 80 / proporcional, paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                <div className='rounded-pill d-flex justify-content-center' style={{width: '100%', height: 44 / proporcional, background: boton_pagar ? 'rgb(44, 133, 344)' : 'rgb(255, 210, 0)'}}
                    onMouseOver={() => setBotonPagar(true)} onMouseLeave={() => setBotonPagar(false)}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${44 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_pagar ? 'white' : 'rgb(0, 0, 0)',
                                fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                        Proceder a pagar
                    </p>
                </div> 
            </div>
        </div>
    )
}
