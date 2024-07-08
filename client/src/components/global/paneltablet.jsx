import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraSuperiorTablet from '../comun/barrasuperiortablet.jsx'
import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import ModalWishlistTablet from '../modal/wishlisttablet.jsx'
import ModalProducto from '../modal/productotablet.jsx'
import ModalCarritoTablet from '../modal/carritotablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'

import { useSelector } from 'react-redux'

export default function GlobalPanelTablet({proporcional}) {

    const {modal_favoritos, modal_producto, modal_carrito} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <BarraSuperiorTablet proporcional={proporcional}/>
            <MenuSuperiorTablet proporcional={proporcional}/>
            <Outlet/>
            {
                modal_producto ? (
                    <ModalProducto proporcional={proporcional}/>
                ) : null
            }
            {
                modal_favoritos ? (
                    <ModalWishlistTablet proporcional={proporcional}/>
                ) : null
            }
            {
                modal_carrito ? ( 
                    <ModalCarritoTablet proporcional={proporcional}/>
                ) : null
            }
            <FooterTablet proporcional={proporcional}/>
        </div>
    )
}
