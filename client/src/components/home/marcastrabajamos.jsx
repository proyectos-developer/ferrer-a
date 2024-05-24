import React from 'react'

export default function MarcasTrabajamos({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 300 / proporcional, paddingRight: 300 / proporcional}}>
            <div style={{width: '100%', height: 'auto', borderTop: '1.5px solid rgba(139, 139, 139, 0.6)', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 100 / proporcional}}>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                    <div className='rounded' style={{width: '15%', height: 100 / proporcional, border: '1px solid rgba(139, 139, 139, 0.8)'}}/>
                </div>
            </div>
        </div>
    )
}
