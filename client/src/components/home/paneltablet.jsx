import React from 'react'

import SliderPrincipalTablet from './sliderprincipaltablet.jsx'
import HerramientasPrimeraTablet from './herramientasprimeratablet.jsx'
import ProductosPopularesTablet from './productospopularestablet.jsx'
import BannerAnuncioTablet from './banneranunciotablet.jsx'
import OfertaDelDiaTablet from './ofertadeldiatablet.jsx'
import MaximoAhorroTablet from './maximoahorrotablet.jsx'
import ProductosMasValoradosTablet from './productosmasvaloradostablet.jsx'
import HerramientasSegundaTablet from './herramientassegundatablet.jsx'
import NuestroBlogTablet from './nuestroblogtablet.jsx'
import MarcasTrabajamosTablet from './marcastrabajamostablet.jsx'
import SuscribirseTablet from './suscribirsetablet.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderPrincipalTablet proporcional={proporcional}/>
            <HerramientasPrimeraTablet proporcional={proporcional}/>
            <ProductosPopularesTablet proporcional={proporcional}/>
            <BannerAnuncioTablet proporcional={proporcional}/>
            <OfertaDelDiaTablet proporcional={proporcional}/>
            <MaximoAhorroTablet proporcional={proporcional}/>
            <ProductosMasValoradosTablet proporcional={proporcional}/>
            <HerramientasSegundaTablet proporcional={proporcional}/>
            <NuestroBlogTablet proporcional={proporcional}/>
            <MarcasTrabajamosTablet proporcional={proporcional}/>
            <SuscribirseTablet proporcional={proporcional}/>
        </div>
    )
}
