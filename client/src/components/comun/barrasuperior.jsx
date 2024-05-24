import React, { useState } from 'react'

import icono_search from '../../assets/iconos/icono_search_white_96.png'

export default function BarraSuperior({proporcional}) {

    const [search, setSearch] = useState('')
    
    return (
        <div style={{width: '100%', height: 50 / proporcional, background: '#4a9ae9', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div style={{width: '100%', height: '100%'}}>
                <div className='d-flex' style={{width: '100%', height: '100%'}}>
                    <div style={{width: '20%', height: '100%', borderRight: '1px solid rgba(28,76,150, 0.4)', paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                            Envío gratuito
                        </p>
                    </div>

                    <div style={{width: '20%', height: '100%', paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                            Soporte en línea 24/7
                        </p>
                    </div>

                    <div style={{width: '20%', height: '100%'}}/>

                    <div className='d-flex justify-content-center' style={{width: '20%', height: '100%', paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional, 
                        borderRight: '1px solid rgba(28,76,150, 0.4)'}}>
                        <input 
                            style={{width: '60%', height: 30 / proporcional, fontSize: 18 / proporcional, color: 'white', background: 'transparent',
                                    fontFamily: 'Noto Sans Georgian, sans-serif'}}
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            id='search'
                            className='form-control border-0'
                            placeholder='Buscar...'/>
                        <img src={icono_search} style={{width: 20 / proporcional, height: 20 / proporcional, margin: 5 / proporcional, cursor: 'pointer'}}/>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '20%', height: '100%', paddingTop: 13 / proporcional, paddingBottom: 13 / proporcional}}>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'default', textAlign: 'center'}}>
                            Hola,
                        </p>
                        <p className='' 
                            style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white',
                                    fontWeight: 400, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer', textAlign: 'center'}}>
                            Inicia sesión
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
