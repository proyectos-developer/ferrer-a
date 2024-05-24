import React from 'react'

import image_00 from '../../assets/images/image_nosotros_630_00.png'
import image_01 from '../../assets/images/image_nosotros_630_01.png'
import image_02 from '../../assets/images/image_nosotros_630_02.png'
import image_03 from '../../assets/images/image_nosotros_630_03.png'

export default function Imagenes({proporcional}) {
        
    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '49%', height: 580 / proporcional}}>
                <img src={image_00} style={{width: '100%', height: 580 / proporcional}}/>
            </div>
            <div style={{width: '49%', height: 580 / proporcional}}>
                <div style={{width: '100%', height: 280 / proporcional, marginBottom: 20 / proporcional}}>
                    <img src={image_01} style={{width: '100%', height: 280 / proporcional}}/>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 280 / proporcional}}>
                    <div style={{width: '49%', height: 280 / proporcional}}>
                        <img src={image_02} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                    <div style={{width: '49%', height: 280 / proporcional}}>
                        <img src={image_03} style={{width: '100%', height: 280 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
