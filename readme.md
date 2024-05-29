<style> h1{color:wheat}h2{color:coral}h3{color:pink}h4{color:peachpuff}em{color:deeppink}strong{color:lightblue}blockquote{color:aqua}</style>

# AUTORSPHERE - Catálogo de Autores

## Tabla de contenidos
1. Informacion General
2. Estructura del proyecto
3. Contenido de cada apartado
4. Fuentes utilizadas 

## Información general
Este proyecto es una página web que presenta  un catálogo de autores y posibilidades de formar parte de una comunidad virtual orientada a la literatura. La página incluye varias secciones como el propósito del sitio, información sobre membresía, un formulario para "unirte" a esa membresía y sliders con contenido informitavo. Además, la página utiliza una API para mostrar información de autores ficticios, que es principalmente el objetivo de este proyecto. 

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la página.
- `style.css`: Contiene los estilos CSS para la página.
- `script.js`: Contiene el código JavaScript para la funcionalidad de la página.
- `images`: Carpeta que contiene las imágenes usadas en el sitio.

## Contenido de cada apartado 
### Index.html: 
1. **Header**: contiene el logo y el nombre del sitio, además ejecuta un nav con enlaces a distintas secciones de la página
2. **Sección propósito:** describe el propósito del sitio y contiene una imagen decorariva
3. **Sección Membresía**: descripción de las ventajas de ser "premium" en la web imaginaria, además de inclusión de un slider con características de la membresía. El motivo del **slider** es para agregar dinamismo en el html con java script, que si bien no fue expresamente pedido, fue interesante realizar este tipo de funcionalidades que puedes hacer con JS. En esta sección no se ejecutó desde el DOM sino solamente se agregó el dinamismo por medio de sus variables y selección de elementos: `items`, `item`, `next`, y `prev`
4. **Formulario de membresía**: permite a los usuarios ingresar información para recibir detalles sobre la membresía, junto con un botón ficticio de "enviar" que crea un *alert*. 
5. **Sección de catálogo de autores**: presente una lista de autores que se obtienen de la API JsonPlaceHolder, específicamente adquirí esta:  https://jsonplaceholder.typicode.com/users. Además, se le agregó desde https://picsum.photos/ fotos a cada autor con fines estéticos.

### Script.js 

#### Funcionalidad del slider 
El slider permite desplazar 5 items utilizando los botones "< >"  de navegación. 
- **Variables y selección de elementos-** : items selecciona todas los elementos con la `class=item`dentro del slider. 
- **`next`y `prev`**: selecciona los botones de navegación 
- `CargarTarjetas()`: ejecuta las transformaciones y el estilo CSS de cada ítem para lograr el efecto de desplazamiento
-**`next.onclick`y `prev.onclick`**: establece el incremento y decremento del slider al dar click. 

#### Botón de envío de formulario 
Muestra una alerta cuando le damos click. 

#### Integración con la API de *JsonPlaceholder* 
- Se usa `DOMContenLoaded` con fines de que el docuemnto se ejecute cuando el HTML sea cargado, para que así el script interactue con el DOM, que es a priori lo que se pidió en ese *casetobesolved* 
- Se usa el `class=user-list`que se escribió ne el HTML para añadir a los usuarios 
```js 
const userList = document.getElementById('user-list');
````

- Se hace una petición a través de la API *jsonplaceholder* pegando el respectivo link https://jsonplaceholder.typicode.com/users.  
Luego la respuesta se convierte a JSON y se empiezan a ejecutar los datos con 
```js 
.then(users => {
    users.forEach(user => {
 ````

 - **Creación de los elementos de usuario desde JS**: 
 
 1. Div contendor: se crea un `div`para contener la información *(en mi preferencia elegí hacerlo modo recuadros)* para que contuviese la información de cada usuario.  `userDiv`. 
 2. Nombre : con un `h2`se crea para el nombre del autor imaginario
 3. Imagen lorempiscum:  se crea un elemento `img` con las imagenes aleatorias que proporciona el enlace.
 4. Frase: se quiso mostrar una frase de cada autor que proporcionaba la API *catch-phrase* 
 5. Email, sitio web y teléfono: se incluyeron según la petición del caso proporcionada por la API
 6. Ciudad: se añadió la ciudad de cada autor según los datos de la API
 7. Finalmente, se añade al contenedor principal el `div`creado para cada autor y se ve reflejado en el HTML. 


Por otro lado, como parte de las promesas, se ejecuta un `.catch` por si ocurre un error al hacer la petición a la API, esta lo capturaría y lo mostraría en la consola. No fue el caso. 


## Fuentes utilizadas 
- Funcionalidad del slider: tutoriales en youtube. 
- Botón de envío de formulario: apuntes proporcionados por UDEMY y me aseguré con chat gpt 
- Integración de la API con JsonPlaceHolder y manejo del DOM: video tutorial de youtube proporcionado por IMMUNE y ChatGPT
- Paleta de colores para armonizar la web: Generador de paletas a través del enlace de Daniel Fenoll "jsdiffle.net" 
- Googlefonts para la tipografía.
- Logo: canva 


