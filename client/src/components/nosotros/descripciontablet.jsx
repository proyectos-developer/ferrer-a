import React, { useState } from 'react'

export default function DescripcionTablet({proporcional}) {

    const [seleccion_menu, setSeleccionMenu] = useState('desarrollo')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 60 / proporcional, borderBottom: '1px solid rgb(229, 229, 229)'}}>
                <div className='d-flex justify-content-center' style={{width: '32%', height: 60 / proporcional, border: seleccion_menu === 'desarrollo' ? '1px solid rgb(229, 229, 229)' : 'none',
                        borderBottom: seleccion_menu === 'desarrollo' ? '1px solid white' : '1px solid rgb(229, 229, 229)'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                color: seleccion_menu === 'desarrollo' ?  '#4a9ae9' : 'black',
                                fontWeight: seleccion_menu === 'desarrollo' ? 700 : 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}
                                onClick={() => setSeleccionMenu('desarrollo')}>
                        Desarrollo
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '32%', height: 60 / proporcional, border: seleccion_menu === 'equipo' ? '1px solid rgb(229, 229, 229)' : 'none',
                        borderBottom: seleccion_menu === 'equipo' ? '1px solid white' : '1px solid rgb(229, 229, 229)'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                color: seleccion_menu === 'equipo' ?  '#4a9ae9' : 'black',
                                fontWeight: seleccion_menu === 'equipo' ? 700 : 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}
                                onClick={() => setSeleccionMenu('equipo')}>
                        Equipo calificado
                    </p>
                </div>
                <div className='d-flex justify-content-center' style={{width: '32%', height: 60 / proporcional, border: seleccion_menu === 'estrategia' ? '1px solid rgb(229, 229, 229)' : 'none',
                        borderBottom: seleccion_menu === 'estrategia' ? '1px solid white' : '1px solid rgb(229, 229, 229)'}}>
                    <p className='' 
                        style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, 
                                color: seleccion_menu === 'estrategia' ?  '#4a9ae9' : 'black',
                                fontWeight: seleccion_menu === 'estrategia' ? 700 : 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}
                                onClick={() => setSeleccionMenu('estrategia')}>
                        Estrategia
                    </p>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', border: '1px solid rgb(229, 229, 229)', borderTop: 'none', padding: 20 / proporcional}}>
                {
                    seleccion_menu === 'desarrollo' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, 
                                        color: 'rgb(102, 102, 102)', fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Contrariamente a la creencia popular, Lorem Ipsum no es simplemente un texto aleatorio. Tiene sus raíces en una pieza de literatura latina clásica del 45 a. C., por lo que tiene más de 2000 años. Richard McClintock, profesor de latín en el Hampden-Sydney College de Virginia, buscó una de las palabras latinas más oscuras, consectetur, en un pasaje de Lorem Ipsum, y revisando las citas de la palabra en la literatura clásica, descubrió la fuente indudable. Lorem Ipsum proviene de las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" (Los extremos del bien y del mal) de Cicerón, escrito en el 45 a.C. Este libro es un tratado sobre la teoría de la ética, muy popular durante el Renacimiento. La primera línea de Lorem Ipsum, "Lorem ipsum dolor sit amet..", proviene de una línea de la sección 1.10.32.
                            </p>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, 
                                        color: 'rgb(102, 102, 102)', fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                El fragmento estándar de Lorem Ipsum utilizado desde el siglo XVI se reproduce a continuación para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" de Cicerón también se reproducen en su forma original exacta, acompañadas de versiones en inglés de la traducción de 1914 de H. Rackham.
                            </p>
                        </div>
                    ) : seleccion_menu === 'equipo' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, 
                                        color: 'rgb(102, 102, 102)', fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Hay muchas variaciones de pasajes de Lorem Ipsum disponibles, pero la mayoría ha sufrido alguna alteración, mediante humor inyectado o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, debes asegurarte de que no haya nada vergonzoso escondido en medio del texto. Todos los generadores de Lorem Ipsum en Internet tienden a repetir fragmentos predefinidos según sea necesario, lo que lo convierte en el primer generador verdadero en Internet. Utiliza un diccionario de más de 200 palabras latinas, combinado con un puñado de estructuras de oraciones modelo, para generar Lorem Ipsum que parece razonable. Por lo tanto, el Lorem Ipsum generado siempre está libre de repeticiones, humor inyectado o palabras no características, etc.
                            </p>
                        </div>
                    ) : seleccion_menu === 'estrategia' ? (
                        <div style={{width: '100%', height: 'auto'}}>
                            <p className='' 
                                style={{fontSize: 18 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, 
                                        color: 'rgb(102, 102, 102)', fontWeight: 500, fontFamily: 'Noto Sans Georgian, sans-serif', cursor: 'pointer'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
