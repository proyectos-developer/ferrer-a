import React, { useState } from 'react'

import icono_grid from '../../assets/iconos/icono_grid_view_black_96.png'
import icono_list from '../../assets/iconos/icono_list_view_black_96.png'

import CardProducto from '../home/card/producto'

export default function Productos({proporcional}) {

    const [order_by, setOrderBy] = useState('')
    const [seleccion_view, setSeleccionView] = useState ('grid')

    const [boton_cargar, setBotonCargar] = useState(false)

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '50%', height: 50 / proporcional}}>
                    <p className='' 
                        style={{fontSize: 16 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(102, 102, 102)',
                                fontWeight: 400, fontFamily: 'Merriweather Sans, sans-serif', cursor: 'default', textAlign: 'left'}}>
                        Mostrando 1 -12 de 24 resultados
                    </p>
                </div>
                <div className='d-flex justify-content-end' style={{width: '50%', height: 50 / proporcional}}>
                    <div style={{width: 'auto', height: 'auto', borderBottom: '1px solid rgb(139, 139, 139)', marginRight: 10 / proporcional}}>
                        <select
                            className='form-select border-0'
                            style={{width: 200 / proporcional, height: 49 / proporcional, fontSize: 16 / proporcional, color: 'rgb(102, 102, 102)',
                                    background: 'white'}}
                            value={order_by}
                            onChange={(value) => setOrderBy(value)}
                            id='order_by'>
                            <option value='0'>Ordenar por</option>
                        </select>
                    </div>
                    <img className='rounded' src={icono_grid} style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional, padding: 10 / proporcional,
                                background: seleccion_view === 'grid' ? 'rgb(255, 210, 0)' : 'white', cursor: 'pointer'}}
                                onClick={() => setSeleccionView('grid')}/>
                    <img className='rounded' src={icono_list} style={{width: 50 / proporcional, height: 50 / proporcional, marginRight: 10 / proporcional, padding: 10 / proporcional,
                                background: seleccion_view === 'list' ? 'rgb(255, 210, 0)' : 'white', cursor: 'pointer'}}
                                onClick={() => setSeleccionView('list')}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional}/>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <button className='btn rounded-pill' style={{width: 180 / proporcional, height: 50 / proporcional, background: boton_cargar ? '#4a9ae9' : 'rgb(255, 210, 0)', 
                    fontSize: 16 / proporcional, color: boton_cargar ? 'white' : 'black', fontWeight: 500, fontFamily: 'Merriweather Sans, sans-serif'}} 
                    onMouseOver={() => setBotonCargar(true)} onMouseLeave={() => setBotonCargar(false)}>
                    Cargar más
                </button>
            </div>
        </div>
    )
}
