import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RegisterPanelTablet({proporcional}) {

    const navigate = useNavigate()

    const [nro_telefono, setNroTelefono] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const [enro_telefono, setENroTelefono] = useState (false)
    const [eemail, setEEmail] = useState (false)
    const [epassword, setEPassword] = useState (false)

    const [boton_registro, setBotonRegistro] = useState (false)

    const registrarse = () => {
        if (nro_telefono === '' || password === '' || email === '') {
            setENroTelefono(nro_telefono === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEPassword(password === '' ? true : false)
        }else{
            setEUsername(false)
            setEEmail(false)
            setEPassword(false)
            const data_session = {
                nro_telefono: nro_telefono,
                email: email,
                password: password
            }
            console.log (data_session)
        }
    }

    const politica_privacidad = () => {

    }

    return (
        <div style={{width: '90%', height: 'auto'}}>
            <p className='' 
                style={{fontSize: 28 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 14 / proporcional, color: 'black',
                        fontWeight: 600, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                Regístrate
            </p>
            <div className='rounded' style={{width: '100%', height: 'auto', padding: 20 / proporcional, marginBottom: 26 / proporcional, border: '1px solid rgb(229, 229, 229)'}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                        Correo electrónico
                    </p>
                    <input  
                        type='default'
                        className='form-control'
                        style={{width: '100%', height: 36 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${34 / proporcional}px`, color: 'rgb(119, 119, 119)',
                            border: eemail ? '1px solid red' : '1px solid rgb(229, 229, 229)'}}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        id='email'/>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default'}}>
                        Nro teléfonico
                    </p>
                    <input  
                        type='number'
                        className='form-control'
                        style={{width: '100%', height: 36 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${34 / proporcional}px`, color: 'rgb(119, 119, 119)',
                            border: enro_telefono ? '1px solid red' : '1px solid rgb(229, 229, 229)'}}
                        value={nro_telefono}
                        onChange={(event) => setNroTelefono(event.target.value)}
                        id='nro_telefono'/>
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
                <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', textAlign: 'left', cursor: 'pointer'}}
                                onClick={() => politica_privacidad()}>
                        Sus datos personales se utilizarán para respaldar su experiencia en este sitio web, para administrar el acceso a su cuenta y para otros fines descritos en nuestra <span style={{cursor: 'pointer', color: 'rgb(43, 133, 244)'}}> política de privacidad.</span>
                    </p>
                </div>
                <div className='rounded-pill' 
                    style={{width: 150 / proporcional, height: 30 / proporcional, background: boton_registro ? 'rgb(43, 133, 244' : 'rgb(255, 210, 0)', cursor: 'pointer'}}
                    onMouseOver={() => setBotonRegistro (true)} onMouseLeave={() => setBotonRegistro(false)} onClick={() => registrarse()}>
                    <p className='' 
                        style={{fontSize: 13 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_registro ? 'white' : 'black',
                                fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                        Registrarse
                    </p>
                </div>
            </div>
        
        </div>
    )
}
