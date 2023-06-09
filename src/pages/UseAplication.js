import React from "react";
import { Typography } from "@material-tailwind/react";
export default function UserAplication(){

    return (
        <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-4 lg:py-4 bg-gray-700 rounded-lg">
      <div className='px-12 py-5 mt-2 pb-5 bg-blue-200 justify-items-center rounded-lg'>
        <Typography variant="h4">Como descargar tu History Browser</Typography>
        <Typography variant="paragraph">
            Esta aplicacion tiene la unica finalidad de procesar un historial de navegacion, los datos son procesados <br></br>
            y almacenados en una base de datos en mongodb, el historial propiamente dicho es eliminado, esta pagina <br></br>
            fue creada con el proposito de aplicar conocimiento aprendido en desarrollo web y desarrollo de servidor.
        </Typography>
        <br></br>
        <Typography variant="h5">Uso Transparente de los datos</Typography>
        <Typography variant="paragraph">
            Este proyecto consta de 2 aplicaciones FrontEnd y BackEnd <br></br>
            En caso quiera revisar el codigo fuente del FrontEnd <a rel="noopener" href="https://github.com/AliCuchalloGabrielFerando/bigDataFrontend" className="text-blue-900" target="_blank">https://github.com/AliCuchalloGabrielFerando/bigDataFrontend</a>  <br></br>
            En caso quiera revisar el codigo fuente del BackEnd <a rel="noopener" href="https://github.com/AliCuchalloGabrielFerando/bigdatabackend" className="text-blue-900" target="_blank">https://github.com/AliCuchalloGabrielFerando/bigdatabackend</a> 
        </Typography>
        <br></br>
        <Typography variant="h5">Paso 1 </Typography>
        <Typography variant="paragraph">
            Ingresa a tu cuenta de Google a la seccion Datos y Privacidad <br></br>
            Busca el Apartado Descargar o Eliminar tus datos <br></br>
            Selecciona Descargar tus datos <br></br>
        <img src="paso1.png"  className="h-96 w-full rounded-lg"alt="paso 1"/>

        </Typography>
        <br></br>
        <Typography variant="h5">Paso 2 </Typography>
        <Typography variant="paragraph">
            Desmarca todos los productos
            <img src="paso2.png"  className="h-64 w-96 rounded-lg"alt="paso 2"/>
            Selecciona unicamente Google Chrome y selecciona "Se han incluido todos datos de Chrome" <br></br>
            Para desmarca todas las opciones y marca solamente BrowserHistory
            <img src="paso3.png"  className="h-64 w-96 rounded-lg"alt="paso 3"/>
            Luego desciende al final de la lista de los productos seleccionados y da click a "Siguiente Paso"
        </Typography>
        <br></br>
        <Typography variant="h5">Paso 3 </Typography>
        <Typography variant="paragraph">
            Esta debe ser su configuracion para descargar solo una vez.
            <img src="paso4.png"  className="h-96 w-96 rounded-lg"alt="paso 4"/>
            Revisa tu Bandeja de entrada en Gmail y descarga el archivo comprimido <br></br>
            Entra  a la carpeta Takeout/Chrome y ahi esta tu archivo BrowserHistory.json
        <img src="paso5.png"  className="h-96 w-full rounded-lg"alt="paso 5"/>
        </Typography>
        <br></br>
        <Typography variant="h5">Paso 4 </Typography>
        <Typography variant="paragraph">
            La unica informacion que requiere esta aplicacion es el campo "url"<br></br>
            Puedes eliminar los datos de los otros campos, pero manten la estructura del archivo <br></br>
            Recordar que esta pagina solo es un trabajo aplicativo de alto procesamiento de datos aplicados a MongoDB
            <img src="paso6.png"  className="h-96 w-full rounded-lg"alt="paso 6"/>
        </Typography>
      </div>
      </div>
    )
}