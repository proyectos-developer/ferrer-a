import React from 'react'
import { Outlet } from 'react-router-dom'

import BarraSuperior from '../comun/barrasuperior.jsx'
import MenuSuperior from '../comun/menusuperior.jsx'
import ModalWishlist from '../modal/wishlist.jsx'
import ModalProducto from '../modal/producto.jsx'
import ModalCarrito from '../modal/carrito.jsx'
import Footer from '../comun/footer.jsx'

import { useSelector } from 'react-redux'

export default function GlobalPanel({proporcional}) {

    const {modal_favoritos, modal_producto, modal_carrito} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: 'auto'}}>
            <BarraSuperior proporcional={proporcional}/>
            <MenuSuperior proporcional={proporcional}/>
            <Outlet/>
            {
                modal_producto ? (
                    <ModalProducto proporcional={proporcional}/>
                ) : null
            }
            {
                modal_favoritos ? (
                    <ModalWishlist proporcional={proporcional}/>
                ) : null
            }
            {
                modal_carrito ? ( 
                    <ModalCarrito proporcional={proporcional}/>
                ) : null
            }
            <Footer proporcional={proporcional}/>
        </div>
    )
}
