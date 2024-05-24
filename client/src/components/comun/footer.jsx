import React from 'react'

import icono_location from '../../assets/iconos/icono_location_white_96.png'
import icono_cell from '../../assets/iconos/icono_cell_white_96.png'
import icono_phone from '../../assets/iconos/icono_phone_white_96.png'
import icono_email from '../../assets/iconos/icono_email_white_96.png'

import icono_visa from '../../assets/iconos/icono_tarjeta_visa_96.png'
import icono_paypal from '../../assets/iconos/icono_tarjeta_paypal_96.png'
import icono_americanexpress from '../../assets/iconos/icono_tarjeta_americanexpres_96.png'
import icono_debito from '../../assets/iconos/icono_tarjeta_debito_96.png'
import icono_mastercard from '../../assets/iconos/icono_tarjeta_mastercard_96.png'
import icono_diners_club from '../../assets/iconos/icono_tarjeta_diners_club_96.png'

import icono_googleplay from '../../assets/iconos/icono_playstore_color_96.png'
import icono_appstore from '../../assets/iconos/icono_appstore_white_96.png'

export default function Footer({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional, paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional,
            background: '#4a9ae9'}}>
            <div className='d-flex justify-content-between' 
                style={{width: '100%', height: 'auto', paddingBottom: 50 / proporcional, borderBottom: '1px solid white', marginBottom: 50 / proporcional}}>
                <div style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        Información tienda
                    </p>
                    <div style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_location} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                                Dirección
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_phone} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                                (01) 43-xxxxxxx
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_cell} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                                (51) 999-xxxxxx
                            </p>
                        </div>
                        <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                            <img src={icono_email} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                            <p className='' 
                                style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                        fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                                correo@dominio.com
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '16%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        Productos
                    </p>
                    <div style={{width: 'auto', heigth: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Delivery
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Noticia legal
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Acerca de nosotros
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Pago seguro
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Contáctanos
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Pagos
                        </p>
                    </div>
                </div>
                <div style={{width: '16%', height: 'auto'}}>  
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        Ayuda
                    </p>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Política y privacidad
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Prensa
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Carreras
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Delivery
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Servicio
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Mapa del sitio
                        </p>
                    </div>
                </div>
                <div style={{width: '16%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        Servicios
                    </p>    
                    <div style={{width: '100%', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Estado de pedido
                        </p>            
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Términos y condiciones
                        </p>            
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Política de vendedor
                        </p>            
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Política de comprador
                        </p>            
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Devolución y reembolso
                        </p>            
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'pointer'}}>
                            Política de venta al por mayor
                        </p>
                    </div>
                </div>
                <div style={{width: '25%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        Acerca de nuestros servicios
                    </p>     
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                            Bienvenido a nuestra tienda, donde nos enorgullecemos de ofrecer productos excepcionales y un servicio al cliente incomparable. Nuestra tienda es un paraíso para quienes aprecian la calidad.
                        </p>            
                        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '48%', height: 50 / proporcional}}>
                                <div className='d-flex rounded' style={{width: '100%', height: 50 / proporcional, border: '1px solid white', background: 'black', cursor: 'pointer'}}>
                                    <img src={icono_googleplay} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 9 / proporcional}}/>
                                    <div style={{width: 'auto', height: 50 / proporcional, paddingTop: 7.5 / proporcional, paddingBottom: 7.5 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 12 / proporcional, lineHeight: `${14 / proporcional}px`, marginBottom: 5 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                            Obtenerlo
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                            Google Play
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{width: '48%', height: 50 / proporcional}}>
                                <div className='d-flex rounded' style={{width: '100%', height: 50 / proporcional, border: '1px solid white', background: 'black', cursor: 'pointer'}}>
                                    <img src={icono_appstore} style={{width: 50 / proporcional, height: 50 / proporcional, padding: 9 / proporcional}}/>
                                    <div style={{width: 'auto', height: 50 / proporcional, paddingTop: 7.5 / proporcional, paddingBottom: 7.5 / proporcional}}>
                                        <p className='' 
                                            style={{fontSize: 12 / proporcional, lineHeight: `${14 / proporcional}px`, marginBottom: 5 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                            Descargarlo de 
                                        </p>
                                        <p className='' 
                                            style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                                            App Store
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${48 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                fontWeight: 400, fontFamily: 'Merryweather Sans, sans-serif', cursor: 'default'}}>
                        @2024 Developer Ideas
                    </p>     
                </div>

                <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                    <img src={icono_visa} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_mastercard} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_diners_club} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_americanexpress} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_debito} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_paypal} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}
