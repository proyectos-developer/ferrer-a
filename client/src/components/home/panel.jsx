import React from 'react'

import SliderPrincipal from './sliderprincipal.jsx'
import HerramientasPrimera from './herramientasprimera.jsx'
import ProductosPopulares from './productospopulares.jsx'
import BannerAnuncio from './banneranuncio.jsx'
import OfertaDelDia from './ofertadeldia.jsx'
import MaximoAhorro from './maximoahorro.jsx'
import ProductosMasValorados from './productosmasvalorados.jsx'
import HerramientasSegunda from './herramientassegunda.jsx'
import NuestroBlog from './nuestroblog.jsx'
import MarcasTrabajamos from './marcastrabajamos.jsx'
import Suscribirse from './suscribirse.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderPrincipal proporcional={proporcional}/>
            <HerramientasPrimera proporcional={proporcional}/>
            <ProductosPopulares proporcional={proporcional}/>
            <BannerAnuncio proporcional={proporcional}/>
            <OfertaDelDia proporcional={proporcional}/>
            <MaximoAhorro proporcional={proporcional}/>
            <ProductosMasValorados proporcional={proporcional}/>
            <HerramientasSegunda proporcional={proporcional}/>
            <NuestroBlog proporcional={proporcional}/>
            <MarcasTrabajamos proporcional={proporcional}/>
            <Suscribirse proporcional={proporcional}/>
        </div>
    )
}
