# Proyecto-2

<h1>Creación de la web de LaLiga Santander</h1>
<p> La web de LaLiga Santander es un proyecto creado dentro del Bootcamp de Campsite.
Consiste en una web donde los usuarios pueden visualizar la clasificación de los equipos e información básica de los mismos, los resultados y los próximos partidos de LaLiga, todo actualizado al momento. 

También se facilita a los usuarios los escudos y los links a las webs de los equipos que participan en LaLiga para su consulta, además de los links a Facebook, Instagram y Twitter de LaLiga.
 </p>

<h2>Funcionalidades</h2>

<p>Información de la Clasificación actualizada de los equipos que compiten en LaLiga Santander e información extra de cada equipo, escudo, nokmbre, año de fundación, colores y nombre del estadio donde juegan. </p>

<p>Home con todos los escudos de los equipos participantes en LaLiga Santander.</p>
<p>Acceso mediante los escudos de la Navbar a todas las páginas oficiales de todos los clubs participantes.</p>
<p>Acceso a todos los resultados de los partidos de LaLiga Santander en resultados, además el usuario puede filtrar por el nombre del equipo de su elección y se le mostrarán todos los partidos jugados y por jugar de ese equipo. También se puede filtrar por resultado final del partido, si este ha sido ganado, perdido o empatado.</p>
<p>Acceso mediante los iconos del Footer a las cuentas oficiales de LaLiga Santander de Facebook, Instagram y Twitter.</p>

<h2>Tecnologías empleadas</h2>
<img src="./imagenes/programas.jpg" alt="" >
<p>- HTML5: utilizado para crear el esqueleto básico de la página web.</p>
<p>- CSS: utilizado para acabar de definir y pulir el diseño de la interfaz con un archivo único para todo el proyecto.</p>
<p>- Bootstrap: utilizado para realizar un diseño más limpio y uniforme, además de responsive.</p>
<p>- JavaScript: utilizado para dar dinamismo, mejorar el rendimiento y funcionalidad de la web.</p>
<p>- Postman: utilizado en un inicio para descargar los datos e información que se muestra en la web. Posteriormente, se utilizo el fetch() para que los datos se actualicen de manera automática.</p>
<p>- Git y GitHub: repositorio en remoto y control y actualización de versiones.</p>

<h2>Descripción técnica</h2>

<p>Para la creación de la web se han utilizado las siguientes funcionalidades genéricas y específicas.</p>

<p>- crearTablaC. Utilizada en la página de Clasificación para mostrar la siguiente información de la clasificación de LaLiga: puntos, partidos jugados, partidos ganados, partidos perdidos, partidos empatados, goles a favor, goles en contra y diferencia de goles </p>

<p>- crearTablaP. Utilizada en la página de Próximos partidos para crear una tabla con la información de los siguientes partidos a jugar, fuera de LaLiga y donde se informa el nombre del equipo local, visitante, país y bandera, liga y fecha.</p> 

<p>- crearTabla. Utilizada en la página de Resultados para mostrar: jornada, equipo local y visitante, resultado final del partido, fecha y escudos de ambos equipos. 
Contiene un fitro para poder buscar por nombre de equipo, partidos perdidos, ganados, empatados o próximos. </p>

<p>- crearTablaClub. Utilizada en la página de Información Club donde se muestra: nombre del equipo, escudo, año de fundación, colores y nombre del estadio.</p>
<p>- imagenesC. Utilizada para obtener los links y los escudos mostrados en la navbar.</p>

<p>getFetch() función empleada en todos los archivos JavaScript dónde es necesario que se actualicen los datos de la API en tiempo real, sin necesidad de usar el POSTMAN.
Los nombres utilizados para esta función en los distintos archivos son:</p>
<p>- get_imgC(): para obtener los escudos y los links a las páginas oficiales introducidos en la navbar.</p>
<p>- get_DataI(): para obtener los datos utilizados para crear la tabla con la información de los clubs.</p>
<p>- get_Data(): para obtener los datos utilizados para crear la tabla de clasificación.</p>
<p>-  getData(): para obtener los datos utilizados para crear la tabla de resultados.</p>
<p>- quitarSpinner() función utilizada en todos los archivos que se actualizan automáticamente mediante la función getFetch(). Oculta el spinner utilizado mientras se carga la información de las tablas.</p>
<p>- quitarAlert(): utilizado para quitar las seis alertas que se han creado para informar de errores en el filtro en el momento adecuado, por ejemplo al cargar la página o al utilizar el botón borrar.</p>
<p>- resetFilter(): para resetear todos los filtros, limpia el campo de texto y también se usa en caso de que salte alguna alerta.</p>
<p>- filtrarEquipos(): utilizado para filtrar todos los equipos por el nombre introducido en el buscador y además crear otro filtro dentro de la nueva array creada en función del resultado.</p>


<h2>Versiones</h2>
<p>- V1.0 (26/10/2022) Primera versión del proyecto</p>
<p>- V1.1 (27/10/2022) 
Mejoras en diseño y fetch() para la actualización de los datos a tiempo real. </p>

<h2>To-Do</h2>
<p>- Mejorar el diseño</p>
<p>- Añadir estadistóicas</p>
<p>- Añadir Clasificación League1 y Premier League</p>
<p>- Filtrar resultados por fechas </p>
<p>- Añadir tabla jugadores con filtro</p>

