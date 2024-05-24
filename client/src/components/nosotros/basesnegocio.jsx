import React, { useState } from 'react'

import icono_task_blue from '../../assets/iconos/icono_task_blue_96.png'
import icono_message_blue from '../../assets/iconos/icono_message_blue_96.png'
import icono_profile_blue from '../../assets/iconos/icono_profile_blue_96.png'

import icono_task_yellow from '../../assets/iconos/icono_task_yellow_96.png'
import icono_message_yellow from '../../assets/iconos/icono_message_yellow_96.png'
import icono_profile_yellow from '../../assets/iconos/icono_profile_yellow_96.png'

export default function BasesNegocio({proporcional}) {

    const [seleccion_icono, setSeleccionIcono] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='shadow rounded' style={{width: '31%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginTop: 50 / proporcional, marginBottom: 50 / proporcional}}>
                            <img src={seleccion_icono === 'task' ? icono_task_yellow : icono_task_blue} style={{width: 50 / proporcional, height: 50 / proporcional}}
                                onMouseOver={() => setSeleccionIcono('task')} onMouseLeave={() => setSeleccionIcono('')}/>
                        </div>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Enviar una tarea
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                        </p>
                    </div>
                </div>
                <div className='shadow rounded' style={{width: '31%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginTop: 50 / proporcional, marginBottom: 50 / proporcional}}>
                            <img src={seleccion_icono === 'message' ? icono_message_yellow : icono_message_blue} style={{width: 50 / proporcional, height: 50 / proporcional}}
                                onMouseOver={() => setSeleccionIcono('message')} onMouseLeave={() => setSeleccionIcono('')}/>
                        </div>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Enviar un mensaje
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                        </p>
                    </div>
                </div>
                <div className='shadow rounded' style={{width: '31%', height: 'auto'}}>
                    <div style={{width: '100%', height: 'auto', padding: 50 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginTop: 50 / proporcional, marginBottom: 50 / proporcional}}>
                            <img src={seleccion_icono === 'perfil' ? icono_profile_yellow : icono_profile_blue} style={{width: 50 / proporcional, height: 50 / proporcional}}
                                onMouseOver={() => setSeleccionIcono('perfil')} onMouseLeave={() => setSeleccionIcono('')}/>
                        </div>
                        <p className='' 
                            style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 50 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Experiencia comfiable
                        </p>
                        <p className='' 
                            style={{fontSize: 16 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                    fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
