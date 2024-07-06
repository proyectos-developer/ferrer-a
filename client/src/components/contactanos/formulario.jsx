import React, { useState } from 'react'

export default function Formulario({proporcional}) {

    const [nombres, setNombres] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [enombres, setENombres] = useState('')
    const [eemail, setEEmail] = useState('')
    const [emessage, setEMessage] = useState('')

    const [boton_enviar, setBotonEnviar] = useState(false)

    const enviar_mensaje = () => {
        if (nombres === '' || email === '' || message === ''){
            setENombres(nombres === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMessage(message === '' ? true : false)
        }else{
            setENombres(false)
            setEEmail(false)    
            setEMessage(false)

            const data_message = {
                nombres: nombres,
                email: email,
                message: message
            }

            console.log (data_message)
        }
    }

    return (
        <div style={{width: '100%', height: 'auto', background: 'rgb(247, 247, 247)', padding: 30 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <p className='' 
                    style={{fontSize: 28 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 12 / proporcional, 
                            color: 'rgb(102, 102, 102)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Ponte en contacto con nosotros
                </p>
                <p className='' 
                    style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, 
                            color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                    Si desea comunicarse con nosotros directamente, complete el siguiente formulario:
                </p>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 60 / proporcional, marginBlock: 32 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Tus nombres
                        </p>
                        <input 
                            id='nombres'
                            type='default'
                            className='border-0 form-control'
                            style={{width: '100%', height: 36 / proporcional, background: 'white', border: enombres ? '1px solid red' : '', fontSize: 13 / proporcional,
                                fontWeight: 400, lineHeight: `${24 / proporcional}px`}}
                            value={nombres}
                            onChange={(event) => setNombres(event.target.value)}
                            placeholder='Tus nombres'/>
                    </div>
                    <div style={{width: '100%', height: 60 / proporcional, marginBlock: 32 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Tu correo electrónico
                        </p>
                        <input 
                            id='email'
                            type='e-mail'
                            className='border-0 form-control'
                            style={{width: '100%', height: 36 / proporcional, background: 'white', border: eemail ? '1px solid red' : '', fontSize: 13 / proporcional,
                                fontWeight: 400, lineHeight: `${24 / proporcional}px`}}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='Tu correo'/>
                    </div>
                    <div style={{width: '100%', height: 274 / proporcional, marginBlock: 32 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: 'rgb(102, 102, 102)', fontWeight: 400, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'left'}}>
                            Tu mensaje
                        </p>
                        <textarea
                            rows={4} 
                            id='message'
                            type='default'
                            className='border-0 form-control'
                            style={{width: '100%', height: 260 / proporcional, background: 'white', border: emessage ? '1px solid red' : '', fontSize: 13 / proporcional,
                                fontWeight: 400, lineHeight: `${24 / proporcional}px`}}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder='Tu mensaje'/>
                    </div>
                    <div className='rounded-pill' style={{width: 200 / proporcional, height: 42 / proporcional, background: boton_enviar ? 'rgb(59, 139, 226)' : 'rgb(255, 210, 0)'}}
                        onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}
                        onClick={() => enviar_mensaje()}>
                        <p className='' 
                            style={{fontSize: 13 / proporcional, lineHeight: `${42 / proporcional}px`, marginBottom: 0 / proporcional, 
                                    color: boton_enviar ? 'white' : 'rgb(0, 0, 0)', fontWeight: 600, fontFamily: 'Poppins, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Enviar mensaje
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
