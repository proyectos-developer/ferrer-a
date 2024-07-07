import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

import ProductoPanel from './components/producto/panel.jsx'
import ProductoPanelTablet from './components/producto/paneltablet.jsx'
import ProductoPanelCell from './components/producto/panelcell.jsx'

import NosotrosPanel from './components/nosotros/panel.jsx'
import NosotrosPanelTablet from './components/nosotros/paneltablet.jsx'
import NosotrosPanelCell from './components/nosotros/panelcell.jsx'

import TiendaPanel from './components/tienda/panel.jsx'
import TiendaPanelTablet from './components/tienda/paneltablet.jsx'
import TiendaPanelCell from './components/tienda/panelcell.jsx'

import ContactanosPanel from './components/contactanos/panel.jsx'
import ContactanosPanelTablet from './components/contactanos/paneltablet.jsx'
import ContactanosPanelCell from './components/contactanos/panelcell.jsx'

import CarritoComprasPanel from './components/carrito/panel.jsx'
import CarritoComprasPanelTablet from './components/carrito/paneltablet.jsx'
import CarritoComprasPanelCell from './components/carrito/panelcell.jsx'

import SessionPanel from './components/session/panel.jsx'
import SessionPanelTablet from './components/session/paneltablet.jsx'
import SessionPanelCell from './components/session/panelcell.jsx'

import OlvidePasswordPanel from './components/session/olvidepassword/panel.jsx'
import OlvidePasswordPanelTablet from './components/session/olvidepassword/paneltablet.jsx'
import OlvidePasswordPanelCell from './components/session/olvidepassword/panelcell.jsx'

export default function App() {
    const [width, setWidth] = useState (window.outerWidth)

    useEffect(() => {
      window.addEventListener('resize', handle_resize)

      return () => {
        window.removeEventListener('resize', handle_resize)
      }
    }, [])

    const handle_resize = () => {
      setWidth(window.outerWidth)
    }

    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={width < 500 ? <GlobalPanelCell   proporcional={499 / width}/> : 
                                       width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> : 
                                                     <GlobalPanel       proporcional={1920 / width} />}>

                  <Route index element={width < 500 ? <HomePanelCell   proporcional={499 / width}/> : 
                                        width < 991 ? <HomePanelTablet proporcional={991 / width}/> : 
                                                      <HomePanel       proporcional={1920 / width} />}/>

                  <Route path='producto/:producto/:sku' element={width < 500 ? <ProductoPanelCell   proporcional={499 / width}/> : 
                                                                 width < 991 ? <ProductoPanelTablet proporcional={991 / width}/> : 
                                                                               <ProductoPanel       proporcional={1920 / width} />}/>
                                                                                    
                  <Route path='sobre-nosotros' element={width < 500 ? <NosotrosPanelCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <NosotrosPanelTablet proporcional={991 / width}/> : 
                                                                      <NosotrosPanel       proporcional={1920 / width} />}/>

                  <Route path='nuestra-tienda' element={width < 500 ? <TiendaPanelCell   proporcional={499 / width}/> : 
                                                        width < 991 ? <TiendaPanelTablet proporcional={991 / width}/> : 
                                                                      <TiendaPanel       proporcional={1920 / width} />}/>

                  <Route path='contactanos' element={width < 500 ? <ContactanosPanelCell   proporcional={499 / width}/> : 
                                                     width < 991 ? <ContactanosPanelTablet proporcional={991 / width}/> : 
                                                                   <ContactanosPanel       proporcional={1920 / width} />}/>

                  <Route path='carrito-compras' element={width < 500 ? <CarritoComprasPanelCell   proporcional={499 / width}/> : 
                                                         width < 991 ? <CarritoComprasPanelTablet proporcional={991 / width}/> : 
                                                                       <CarritoComprasPanel       proporcional={1920 / width} />}/>

                  <Route path='session' element={width < 500 ? <SessionPanelCell   proporcional={499 / width}/> : 
                                                 width < 991 ? <SessionPanelTablet proporcional={991 / width}/> : 
                                                               <SessionPanel       proporcional={1920 / width} />}/>

                  <Route path='olvide-password' element={width < 500 ? <OlvidePasswordPanelCell   proporcional={499 / width}/> : 
                                                         width < 991 ? <OlvidePasswordPanelTablet proporcional={991 / width}/> : 
                                                                       <OlvidePasswordPanel       proporcional={1920 / width} />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    )
}
