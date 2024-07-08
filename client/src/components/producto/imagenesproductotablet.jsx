import React from 'react'

import icono_right from '../../assets/iconos/icono_right_black_96.png'
import icono_left from '../../assets/iconos/icono_left_black_96.png'

export default function ImagenesProductoTablet({proporcional}) {

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '90%', height: 'auto'}}>
                <div style={{width: '100%', height: 700 / proporcional, background: 'rgb(242, 242, 242)', marginBottom: 20 / proporcional}}/>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 86 / proporcional}}>
                    <img src={icono_left} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 33 / proporcional, marginBottom: 33 / proporcional, cursor: 'pointer'}}/>
                    <div className='rounded' style={{width: 86 / proporcional, height: 86 / proporcional, border: '1px solid rgb(189, 189, 189)'}}/>
                    <div className='rounded' style={{width: 86 / proporcional, height: 86 / proporcional, border: '1px solid rgb(189, 189, 189)'}}/>
                    <div className='rounded' style={{width: 86 / proporcional, height: 86 / proporcional, border: '1px solid rgb(189, 189, 189)'}}/>
                    <div className='rounded' style={{width: 86 / proporcional, height: 86 / proporcional, border: '1px solid rgb(189, 189, 189)'}}/>
                    <div className='rounded' style={{width: 86 / proporcional, height: 86 / proporcional, border: '1px solid rgb(189, 189, 189)'}}/>
                    <img src={icono_right} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 33 / proporcional, marginBottom: 33 / proporcional, cursor: 'pointer'}}/>
                </div>
            </div>
        </div>
    )
}
