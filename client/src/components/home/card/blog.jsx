import React from 'react'

import image_00 from '../../../assets/images/image_blog_400_00.png'
import image_01 from '../../../assets/images/image_blog_400_01.png'
import image_02 from '../../../assets/images/image_blog_400_02.png'

export default function CardBlog({proporcional, index}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 250 / proporcional, marginBottom: 20 / proporcional}}>
                    <img className='rounded' src={index === 1 ? image_00 : index === 2 ? image_02 : image_01} style={{width: '100%', height: 250 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(119, 119, 119)',
                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        {
                            index === 1 ? (
                                'Febrero 3, 2024, por editor'
                            ) : index === 2 ? (
                                'Febrero 1, 2024, por editor'
                            ) : (
                                'Enero 29, 2024, por editor'
                            )
                        }
                    </p>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        {
                            index === 1 ? (
                                '50 Mejores preguntas de como determinar las necesidades de un cliente.'
                            ) : index === 2 ? (
                                '6 formas sencillas de aumentar la tasa de conversión de su comercio electrónico.'
                            ) : (
                                '9 tendencias en experiencia del cliente que definirán el próximo año.'
                            )
                        }
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(102, 102, 102',
                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        {
                            index === 1 ? (
                                'La guía poco convencional para las aplicaciones de software. ¿Por qué la gente piensa que el software empresarial...'
                            ) : index === 2 ? (
                                'Las mejores formas de utilizar las máquinas de entrevistas. 18 cosas que tu jefe espera de ti...'
                            ) : (
                                'El lugar más extraño encontrará informes financieros. ¿Alguna vez las empresas dominarán el...'
                            )
                        }
                    </p>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${20 / proporcional}px`, marginBottom: 20 / proporcional, color: 'black',
                                fontWeight: 600, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'pointer', textAlign: 'left', textDecoration: 'underline'}}>
                        Leer más
                    </p>
                </div>
            </div>
        </div>
    )
}
