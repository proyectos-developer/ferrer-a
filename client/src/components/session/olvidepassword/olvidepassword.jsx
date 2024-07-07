import React, { useState } from 'react'

export default function OlvidePassword({proporcional}) {

    const [email, setEmail] = useState('')

    const [eemail, setEEmail] = useState(false)

    const [boton_resetear, setBotonRestear] = useState(false)

    const resetear_password = () => {
        if (email === ''){
            setEEmail (email === '' ? true : false)
        }else{
            setEEmail(false)
            const data_reset = {
                email: email
            }
            console.log (email)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <p className='' 
                style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 32 / proporcional, color: 'rgb(102, 102, 102)',
                        fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                ¿Perdiste tu contraseña? por favor ingrese su nombre de usuario o dirección de correo electrónico. Recibirás un enlace para crear una nueva contraseña por correo electrónico.
            </p>
            <div style={{width: '100%', height: 'auto', marginBottom: 12 / proporcional}}>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 32 / proporcional, color: 'black',
                            fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'default'}}>
                    Correo electrónico
                </p>
                <input
                    className='form-control'
                    type='e-mail'
                    style={{width: '50%', height: 35 / proporcional, fontSize: 13 / proporcional, fontWeight: 400, lineHeight: `${30 / proporcional}px`, 
                        border: eemail ? '1px solid red' : '1px soid rgb(229, 229, 229)',
                        color: 'rgb(119, 119, 119)'}}
                    value={email} 
                    onChange={(event) => setEmail (event.target.value)}
                    placeholder=''/>
            </div>
            <div className='rounded-pill' style={{width: 150 / proporcional, height: 40 / proporcional, background: boton_resetear ? 'rgb(44, 133, 243)' : 'rgb(255, 210, 0)',
                    cursor: 'pointer'}}
                onMouseOver={() => setBotonRestear(true)} onMouseLeave={() => setBotonRestear(false)} onClick={() => resetear_password}>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_resetear ? 'white' : 'black',
                            fontWeight: 500, fontFamily: 'Poppins, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                    Resetear password
                </p>
            </div>
        </div>
    )
}
