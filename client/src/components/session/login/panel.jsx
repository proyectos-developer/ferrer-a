import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import icono_check_box from '../../../assets/iconos/icono_check_box_black_96.png'
import icono_box_empty from '../../../assets/iconos/icono_box_black_96.png'

export default function LoginPanel({proporcional}) {

    const navigate = useNavigate()

    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')

    const [eusername, setEUsername] = useState (false)
    const [epassword, setEPassword] = useState (false)

    const [recordarme, setRecordarme] = useState (false)
    const [boton_sesion, setBotonSesion] = useState (false)

    const iniciar_sesion = () => {
        if (username === '' || password === '') {
            setEUsername(username === '' ? true : false)
            setEPassword(password === '' ? true : false)
        }else{
            setEUsername(false)
            setEPassword(false)
            const data_session = {
                username: username,
                password: password
            }
            console.log (data_session)
        }
    }

    const olvide_password = () => {
        navigate ('/olvide-password')
    }

    return (
        <div style={{widt: '100%', height: 'auto'}}>
            <p className='' 
                style={{fontSize: 28 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 14 / proporcional, color: 'black',
                        fontWeight: 600, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                Iniciar sesión
            </p>
            <div className='rounded' style={{width: '100%', height: 'auto', padding: 20 / proporcional, marginBottom: 26 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                        Correo electrónico o número teléfonico
                    </p>
                    <input  
                        type='default'
                        className='form-control'
                        style={{width: '100%', height: 36 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${34 / proporcional}px`, color: 'rgb(119, 119, 119)',
                            border: eusername ? '1px solid red' : '1px solid rgb(229, 229, 229)'}}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        id='username'/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                        Contraseña
                    </p>
                    <input  
                        type='password'
                        className='form-control'
                        style={{width: '100%', height: 36 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${34 / proporcional}px`, color: 'rgb(119, 119, 119)',
                            border: epassword ? '1px solid red' : '1px solid rgb(229, 229, 229)'}}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id='password'/>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 13 / proporcional}}>
                    <div className='rounded-pill' 
                        style={{width: 150 / proporcional, height: 30 / proporcional, background: boton_sesion ? 'rgb(43, 133, 244' : 'rgb(255, 210, 0)', cursor: 'pointer',
                                marginRight: 13 / proporcional}}
                        onMouseOver={() => setBotonSesion (true)} onMouseLeave={() => setBotonSesion(false)} onClick={() => iniciar_sesion()}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_sesion ? 'white' : 'black',
                                    fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                            Iniciar sesión
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 'auto', cursor: 'pointer'}}
                            onClick={() => setRecordarme(!recordarme)}>
                        <img src={recordarme ? icono_check_box : icono_box_empty} style={{width: 30 / proporcional, height: 30 / proporcional, padding: 8 / proporcional}}/>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                    fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', textAlign: 'left'}}>
                            Recordarme
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(43, 133, 244)',
                                fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                                onClick={() => olvide_password()}>
                        Olvidé mi contraseña
                    </p>
                </div>
            </div>
        </div>
    )
}
