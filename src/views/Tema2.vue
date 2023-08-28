<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Codificación web
    p.mb-5(data-aos="fade-right") El proceso de maquetación web es la transformación del diseño o prototipo a un producto web en un conjunto de archivos (html, css, js), de manera que serán desplegados (renderizados) por un navegador.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4(data-aos="fade-down")
          p.mb-0 La maquetación web es el proceso que consiste en tomar el prototipo gráfico, también denominado «layout»  (con los requisitos estructurales y estéticos definidos y aprobados en un análisis inicial), y transformarlo en código html, css y js (estándares web), para que los navegadores puedan interpretarlo correctamente (Edición y maquetación de documentos web, 2012).
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Uso de estilos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 420px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p.mb-0 El uso de las hojas de estilo comprende aplicar cambios en las propiedades de los elementos html determinados en la maquetación o definición del diseño, esto es uno de los beneficios determinados por los frameworks CSS, que proporcionan una estructura html con la configuración predeterminada de los componentes. Es decir, que si se tiene un elemento tipo tarjeta, se usará, probablemente, el tag &lt;article&gt;	 o &lt;div&gt;	, y se le aplicarán los estilos necesarios, ya sea color, tipografía, tamaño de letra, títulos, párrafos, etc.
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c7
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 #[i Movie first design] vs. #[i Responsive web design]
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 80px" ,alt='').m-auto
      .col
        p.mb-0 Algunos de los #[i frameworks] CSS definían clases, con atributos y estructuras prediseñadas, con la finalidad de tener plantillas que se pudieran redimensionar de acuerdo con la pantalla del dispositivo en el cual se estuviera renderizando, a este tipo de diseños se les denomina adaptativos, es decir que, al minimizar la resolución, se minimiza el tamaño del contenido.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 2]. Métodos de diseño
    .row.bg-c8.mb-5
      .col-12
        .px-5.pt-5
          figure.mb-5(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img3.svg', style="width: 960px" ,alt='').m-auto
          .row.justify-content-center
            .col-lg-8
              .cajon.color-secundario.p-4(data-aos="fade-left")
                p.mb-0 #[b #[i Mobile first]], «los móviles primero», consiste en realizar la maquetación teniendo en cuenta los dispositivos móviles, proporcionando la relación de pantalla de los móviles, las tablets y las pantallas de ordenador. Estos diseños están pensados para ser escalados de acuerdo con la dimensión de la pantalla en la que son renderizados, es decir, permitiendo cambiar el tamaño y estructura de un tipo a otro.
    p.mb-5 Algunos de los frameworks CSS son:
    .row.bg-c9.mb-5
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p #[b Bootstrap CSS]
              p.mb-0 Es un conjunto de archivos y herramientas de CSS, de código abierto, utilizado específicamente para la maquetación y desarrollo web. Se puede organizar y dar forma a un sitio web dando uso a los estilos y las características determinadas en el mismo; estas librerías están determinadas por el código estructural en html, los estilos en CSS y código funcional en JavaScript. Algunos de los componentes desarrollados son: ventanas modales, menús, cuadros, botones, formularios, es decir, los elementos que necesitas para maquetar una página.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 460px" ,alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img5.svg', style="width: 350px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Bootstrap permite crear interfaces de usuario limpias y adaptables a dispositivos y pantallas de cada tamaño, algunas de sus principales características son:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Documentación y soporte amplio con HTML5 y CSS3, que permite un uso flexible.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Un sistema Grillas (o GRID) que permite diseñar usando unas grillas de 12 columnas, donde se pueden establecer contenidos. Esto permite construir contenido responsive de forma fácil, intuitiva y rápida.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Compatible con la mayoría de los navegadores.
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c7
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Material Design
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema2/img6.svg', style="width: 80px" ,alt='').m-auto
      .col
        p Es un tipo de diseño creado por Google, establecido desde junio de 2014, orientado específicamente para aplicaciones nativas Android desde la versión Lollipop. Se ha publicado una guía (disponible en 
          |
          a(href="https://material.io/design" target="_blank") https://material.io/design
          |) para que se realicen aplicaciones web; los ítems propuestos son:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Uso de lenguaje visual, en conjunto con principios de buen diseño.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Ser una línea de diseño que permita una experiencia uniforme en diferentes plataformas y dispositivos, tales como pantallas táctiles, control de voz, etc.
    p.mb-5(data-aos="fade-right") Se presentan también los tres principios fundamentales:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-down")
      .row(titulo="A. Lo material como una metáfora")
        .col-12
          p Como lo material está unido a la realidad, fusionándose con el espacio, el tiempo y el movimiento, está ligado a la realidad táctil, es por esto que se puede integrar con la tecnología, haciendo uso de la creatividad y la imaginación.
          p Los bordes y superficies de las cosas materiales entregan pistas visuales basadas en la realidad. El uso de atributos familiares al mundo real ayuda al usuario a entender las posibilidades de lo que se puede hacer con cada elemento presente en la interfaz. Para lograr esto, se deben presentar los principios superficie, luz y movimiento, como elementos principales para transmitir cómo los objetos existen y están dispuestos a interactuar uno con el otro o con el usuario.
          .titulo-sexto.color-primario.mb-4
            p.mb-0 #[b Figura 3]. Materiales
          figure
            img(src='@/assets/curso/tema2/img7.svg', style="width: 160px" ,alt='')
      .row(titulo="B. Llamativo e intencional")
        .col-12
          p Todos los elementos visuales son diseñados por los conceptos de la teoría del diseño, como el uso del color, los espacios en blanco, sombras, el sistema de tabla de datos, etc. Todos estos elementos ayudan a determinar la jerarquía y lectura visual.
          .titulo-sexto.color-primario.mb-4
            p.mb-0 #[b Figura 4]. Diseño de componentes
          figure.mb-4
            img(src='@/assets/curso/tema2/img8.svg', style="width: 460px" ,alt='')
          p El sistema de color de Material Design ayuda a aplicar color a las interfaces de usuario de una manera simplificada. En este sistema, el diseñador define un color como primario y otro como secundario, para representar el tema de su marca. Las variaciones de oscuras y claras para cada color se aplican a la interfaz de usuario de diferentes formas de manera preestablecida.
          .titulo-sexto.color-primario.mb-4
            p.mb-0 #[b Figura 5]. Manejo de colores
          figure
            img(src='@/assets/curso/tema2/img9.svg', style="width: 460px" ,alt='')
      .row(titulo="C. El movimiento otorga significado")
        .col-12
          p En una aplicación web o móvil, una animación capta la atención de los usuarios, sin embargo, es deseable que estas animaciones no interrumpan la experiencia de usuario. De esta forma, es deseable que exista relación entre las animaciones y la propia esencia del sitio web o aplicación, por ejemplo, el efecto de presionar el botón, la experiencia real de desplazar un elemento.
          p.mb-0 Para Google, el movimiento enfatiza el papel del usuario como el actor principal de la interacción con la máquina y el que dirige los movimientos en dicha interacción. Las acciones del usuario tienen el poder de cambiar el diseño o disposición de los elementos. Es así que los elementos de la interfaz son presentados al usuario sin interferir con la experiencia de usuario, incluso cuando dichos elementos se transforman y reorganizan.
    p.mb-5(data-aos="fade-right") En conclusión, Material Design es una propuesta de diseño novedosa y que se está incorporando en las nuevas versiones de Android. Los principios del Material Design van guiados a mejorar la experiencia de usuario teniendo en cuenta las últimas tecnologías. Tenga en cuenta:
    figure.d-none.d-lg-block.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema2/img10.svg', style="width: 1060px" ,alt='').m-auto
    figure.d-block.d-lg-none.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema2/img10m.svg', style="width: 320px" ,alt='').m-auto
    p(data-aos="fade-right") Los objetivos que se obtienen con las pruebas de interfaz son:
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Las características que tiene la interfaz deben probarse para asegurar que las reglas del diseño, la estética y el contenido visual estén a disposición del usuario sin lugar a errores.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Los elementos individuales de la interfaz deben probarse de forma unitaria (por ejemplo, se prueba HTML dinámico, cgi, carrito de compras, etc.) y, con especial cuidado, aquellos que manipulan la presentación de datos y componentes visuales.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 La interfaz debe probarse frente a cada historia de usuario o caso de uso, para descubrir errores semánticos y facilidad de uso por parte del usuario.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 La interfaz debe probarse dentro de una diversidad de ambientes para asegurar su compatibilidad (celular, tablets, pantallas, smart tv, etc.).
      .col-lg-4(data-aos="fade-left")
        .cajon.color-secundario.p-4
          p.mb-0 #[b Pruebas semánticas]: Mientras se prueba cada historia de usuario o caso de uso, se revisa la información en pantalla o display que el usuario obtendrá, especialmente, en los menús y formularios, que sea entendible y coherente con el usuario y el contexto en que esté empleado el sistema.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p #[b.txt-c1 Por ejemplo: El usuario operador no debe ver información solo permitida para los administradores.]
              br
              br
              | Una vez probada cada historia de usuario o caso de uso de forma unitaria para cada mecanismo de la interfaz, se continúa con la prueba semántica, esta evalúa cuán bien el diseño se preocupa de los usuarios y su interacción con el sistema, ofreciendo una dirección clara al siguiente paso del proceso informático u opciones disponibles dentro del flujo de operaciones del sistema, manteniendo consistencia de lenguaje y enfoque.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-botones
      h2 2.1. Creación proyecto Node.js
    p.mb-5(data-aos="fade-right") Una de las primeras diferencias entre JavaScript y NodeJs es el concepto de Módulo, el cual contiene variables, funciones, objetos, que son exportados para ser usados en otras implementaciones.
    .row.bg-c10.mb-5(data-aos="fade-left")
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white De esta manera, lo anterior se puede retomar a partir de.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    p.mb-5(data-aos="fade-right") Para entender esto un poco más, creemos el siguiente archivo.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 6]. Creación modulo matemáticas en Node.js
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width: 350px" ,alt='').m-auto
          .col-lg-6(data-aos="fade-left")
            p.mb-0 A diferencia de los archivos js de JavaScript, en NodeJs no es requerido un documento HTML para ser ejecutado, sino, por el contrario, se usa el intérprete de NodeJs. En el archivo creado, se definirán algunas funciones básicas y constantes.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 7]. Definición de funciones y constantes en modulo Node.js
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            p matematicas.js
            pre
              code.language-javascript
                |1  const PI = 3.1416
                |2  
                |3  function sumar(x1,x2) {
                |4    return x1+x2
                |5  }
                |6  
                |7  function restar(x1,x2) {
                |8    return x1-x2
                |9  }
                |10 
                |11 exports.PI = PI
                |12 exports.sumar = sumar
                |13 exports.restar = restar
          .col-lg-6(data-aos="fade-left")
            p.mb-0 En la parte inferior de la definición del módulo, se puede observar que se exportan los elementos, tales como las funciones y las constantes. Luego de definido el módulo, este podrá ser usado en otra sección del código, es decir, todo lo que fue exportado podrá ser reutilizado; si se requiere de alguna función interna del módulo y que no sea visible en otras secciones, solo basta con no exportarlo, pero podrá ser usado al interior del módulo en otra función.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 8]. Creación de archivo para importar módulo
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img5.png', style="width: 350px" ,alt='').m-auto
          .col-lg-6(data-aos="fade-left")
            p.mb-0 En el archivo example.js, se realiza la importación del módulo construido, llamado matematicas.js, en el cual se podrá hacer uso de las funcionalidades exportadas, empleando, de esta manera, el concepto de reutilización de código.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 9]. Implementación de funcionalidad importando módulo
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
            pre
              code.language-javascript
                |1  const mat = require('./matematicas')
                |2  
                |3  console.log('La suma de 2+2= ' + mat.sumar(2,2))
                |4  console.log('La resta de 4-1= ' + mat.restar(4,1))
                |5  console.log('El valor de PI= ' + mat.PI)
          .col-lg-6(data-aos="fade-left")
            p.mb-0 Para ejecutar el bloque de código de NodeJs, se requiere ingresar a la consola CMD y navegar hasta donde está almacenado el archivo fuente; posteriormente, con el prefijo node, buscar el archivo que se quiere implementar.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 10]. Ejecución de funcionalidad desde CMD
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img6.png', style="width: 450px" ,alt='').m-auto
          .col-lg-6(data-aos="fade-left")
            p Cabe resaltar que, en la actualidad, hay muchos frameworks, con componentes y módulos con funcionalidades genéricas desarrolladas previamente por empresas u otros desarrolladores, lo cual busca optimizar y agilizar el desarrollo de aplicaciones. 
            p.mb-0 También se pueden consumir módulos definidos en el core de Node.js; entre estos módulos, se pueden destacar los siguientes: os, http, fs, net, url, path, dns, process, entre otros más.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 11]. Consumo de componente del core
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
            pre
              code.language-javascript
                |1  const os = require('os')
                |2  
                |3  console.log('Sistema operativo: ' + os.platform())
                |4  console.log('Versión del sistema operativo: ' + os.release())
                |5  console.log('Memoria total: ' + os.totalmen() + ' bytes')
                |6  console.log('Memoria libre: ' + os.freemen() + ' bytes')
                |7  console.log('Arquitectura CPU: ' + os.arch)
                |8  console.log('Número de procesadores lógicos ' + os.cpus().length)
                |9  os.cpus().forEach(cpu => {
                |10   console.log('Nombre: ' + cpu.model)
                |11   console.log('Núcleos: ' + cpu.cores)
                |12 })
          .col-lg-5(data-aos="fade-left")
            p.mb-0 Como se puede apreciar en el anterior ejemplo, se incorpora el módulo ‘os’, este permite obtener información del sistema operativo en el cual está corriendo Node.js.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 12]. Resultado de consumo módulo ‘os’
    .row.mb-5
      .col-12.bg-c3.p-4(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/img7.png', style="width: 750px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Hasta el momento, se han tratado temas relacionados con aplicaciones ejecutadas desde el compilador, apoyadas en la consola CMD. Siga las siguientes instrucciones para construir el primer proyecto tipo servidor con páginas web estáticas. Detalle los pasos que se presentan a continuación.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul3")(data-aos="fade-down")
      .row.justify-content-center(titulo="Paso 1")
        .col-lg-5.mb-4.mb-lg-0
          p.mb-0 Crear espacio de trabajo. Cree una carpeta con el nombre webapp y, en su interior, defina una subcarpeta con el nombre static.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/img8.png', style="width: 450px" ,alt='').m-auto
      .row.justify-content-center(titulo="Paso 2")
        .col-lg-5.mb-4.mb-lg-0
          p.mb-0 Defina el contenido estático a ser devuelto por el servidor. En este paso, cree 3 archivos en el espacio de static, en el cual va a definir el archivo index.html, pag1.html y pag2.html.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/img9.png', style="width: 450px" ,alt='').m-auto
      .row.justify-content-center(titulo="Paso 3")
        .col-12
          p Transcriba el contenido estático de cada archivo html.
          .row
            .col-lg-4.mb-3.mb-lg-0
              p Página estática index.html.
              pre
                code.language-html
                  | &lt;! doctype html&gt;
                  | &lt;html&gt;
                  | &lt;head&gt;
                  |   &lt;title&gt;Prueba de Node.js&lt;/title&gt;
                  |   &lt;meta charset="UTF-8"&gt;
                  | &lt;/head&gt;
                  | &lt;body&gt;
                  |   &lt;h1&gt;Principal&lt;/h1&gt;
                  |   &lt;p&gt;Página 1:&lt;a href="pag1.html"&gt;Entrar&lt;/a&gt;&lt;/p&gt;
                  |   &lt;p&gt;Página 2:&lt;a href="pag2.html"&gt;Entrar&lt;/a&gt;&lt;/p&gt;
                  | &lt;/body&gt;
                  | &lt;/html&gt;
            .col-lg-4.mb-3.mb-lg-0
              p Página estática pag1.html.
              pre
                code.language-html
                  | &lt;! doctype html&gt;
                  | &lt;html&gt;
                  | &lt;head&gt;
                  |   &lt;title&gt;Prueba de Node.js&lt;/title&gt;
                  |   &lt;meta charset="UTF-8"&gt;
                  | &lt;/head&gt;
                  | &lt;body&gt;
                  |   &lt;h1&gt;Página 1&lt;/h1&gt;
                  |   &lt;p&gt;&lt;a href="pag1.html"&gt;Retornar&lt;/a&gt;&lt;/p&gt;
                  | &lt;/body&gt;
                  | &lt;/html&gt;
            .col-lg-4
              p Página estática pag2.html.
              pre
                code.language-html
                  | &lt;! doctype html&gt;
                  | &lt;html&gt;
                  | &lt;head&gt;
                  |   &lt;title&gt;Prueba de Node.js&lt;/title&gt;
                  |   &lt;meta charset="UTF-8"&gt;
                  | &lt;/head&gt;
                  | &lt;body&gt;
                  |   &lt;h1&gt;Página 2&lt;/h1&gt;
                  |   &lt;p&gt;&lt;a href="pag1.html"&gt;Retornar&lt;/a&gt;&lt;/p&gt;
                  | &lt;/body&gt;
                  | &lt;/html&gt;
      .row.justify-content-center(titulo="Paso 4")
        .col-12
          .row
            .col-lg-4.mb-3.mb-lg-0
              p Crear el archivo principal de NodeJs, para renderizar los archivos estáticos y definir el servidor web.
              p Archivo principal de ejecución main.js
              figure
                img(src='@/assets/curso/tema2/img10.png', style="width: 450px" ,alt='').m-auto
            .col-lg-8
              p Lógica de archivo principal de Node.js
              pre
                code.language-javascript
                  |1  const http = require('http')
                  |2  const fs = require('fs')
                  |3
                  |4  const servidor = http.createServer((pedido,respuesta) => {
                  |5    const url = new URL('http://localhost:8888' + pedido.url)
                  |6    let camino = 'static' + url.pathname
                  |7    if  (camino == 'static/')
                  |8      camino = 'static/index.html'
                  |9    fs.stat(camino, error => {
                  |10     if(!error) {
                  |11       fs.readFile(camino, (error, contenido) => {
                  |12         if (error) {
                  |13           respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
                  |14           respuesta.write('Error interno')
                  |15           respuesta.end()
                  |16         } else {
                  |17           respuesta.writeHead(200, { 'Content-Type': 'text/plain' })
                  |18           respuesta.write(contenido)
                  |19           respuesta.end()
                  |20         }
                  |21       })
                  |22     } else {
                  |23       respuesta.writeHead(404, { 'Content-Type': 'text/plain' })
                  |24       respuesta.write('&lt;! doctype html&gt;&lt;head&gt;&lt;body&gt;Recurso inexistente&lt;/body&gt;&lt;/html&gt;')
                  |25       respuesta.end()
                  |26     }
                  |27   })
                  |28 })
    p.mb-5(data-aos="fade-right") En el anterior ejemplo, se hizo uso de dos módulos del core de NodeJs, los cuales son ‘http’ y ‘fs’, permitiendo establecer un servidor web y manejar los archivos html estáticos.
    .row.bg-c10(data-aos="fade-left")
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white Para finalizar, se puede ampliar la información a partir de.]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    Separador
    #t_2_2
    .titulo-segundo.color-acento-botones
      h2 2.2. Creación e instalación de servidor Express sobre Node.js
    p.mb-5(data-aos="fade-right") Con Node.js, es posible desarrollar un sitio web completo para renderizar páginas web estáticas o dinámicas, aunque la comunidad ha desarrollado un framework denominado Express, el cual facilita y ordena el desarrollo de sitios web.
    .row.bg-c10(data-aos="fade-left")
      .col-12
        .px-5.pt-5.pb-5.pb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width: 350px" ,alt='').m-auto
            .col-auto.col-lg-5
              p #[b.text-white De esta manera tenga en cuenta el siguiente paso a paso descrito en el anexo_ Creación e instalación de servidor Express sobre Node.js]
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Ver enlace
                i.fas.fa-link
    Separador
    #t_2_3
    .titulo-segundo.color-acento-botones
      h2 2.3. Configuración de apache para aplicación cliente
    p.mb-5(data-aos="fade-right") Tenga en cuenta la siguiente información:
    .tarjeta.tarjeta--azul4.p-4.mb-5(data-aos="fade-right")
      SlyderA
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img14.svg', style="width: 950px" ,alt='').m-auto
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img15.svg', style="width: 950px" ,alt='').m-auto
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img16.svg', style="width: 950px" ,alt='').m-auto
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img17.svg', style="width: 950px" ,alt='').m-auto
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img18.svg', style="width: 950px" ,alt='').m-auto
        .row.justify-content-center
          .col-10
            figure
              img(src='@/assets/curso/tema2/img19.svg', style="width: 950px" ,alt='').m-auto
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Instalación de XAMPP
    p.mb-5(data-aos="fade-right") El proceso de instalación descrito es para máquinas con sistema operativo Windows; para otros sistemas operativos, el proceso puede variar.
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta.tarjeta--azul5.p-4
          SlyderA
            .row.justify-content-center
              .col-10
                p #[b A.] Descarga del instalador.
                figure
                  img(src='@/assets/curso/tema2/img11.png', style="width: 480px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b B.] Desactivar antivirus.
                figure
                  img(src='@/assets/curso/tema2/img12.png', style="width: 480px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b C.] Desactivar el UAC.
                figure
                  img(src='@/assets/curso/tema2/img13.png', style="width: 480px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b D.] Iniciar el wizard de instalación.
                figure
                  img(src='@/assets/curso/tema2/img14.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b E.] Selección de componentes de software.
                figure
                  img(src='@/assets/curso/tema2/img15.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b F.] Selección de directorio de instalación.
                figure
                  img(src='@/assets/curso/tema2/img16.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b G.] Iniciar el proceso de instalación.
                figure
                  img(src='@/assets/curso/tema2/img17.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b H.] Configurar el firewall.
                figure
                  img(src='@/assets/curso/tema2/img18.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b I.] Cerrar instalador.
                figure
                  img(src='@/assets/curso/tema2/img19.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b J.] Ejecutar panel de control.
                figure
                  img(src='@/assets/curso/tema2/img20.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b K.] Iniciar módulos. 
                figure
                  img(src='@/assets/curso/tema2/img21.png', style="width: 450px" ,alt='').m-auto
            .row.justify-content-center
              .col-10
                p #[b L.] Comprobar instalación y ejecución de Apache.
                figure
                  img(src='@/assets/curso/tema2/img22.png', style="width: 450px" ,alt='').m-auto
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img20.svg', style="width: 390px" ,alt='').m-auto
    Separador
    #t_2_4
    .titulo-segundo.color-acento-botones
      h2 2.4 Codificación de petición tradicional HTTP, síncrona
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img23.png', style="width: 390px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p El desarrollo de aplicaciones sincrónicas presenta una serie de limitaciones, teniendo en cuenta las capacidades de lo que presenta la red, por lo cual es determinante la aplicación de tecnologías alternativas. Por ejemplo, imagine una aplicación relacionada con el mercado bursátil donde se plasman los valores actuales del mercado al momento de ingresar la aplicación, una aplicación sincrónica mostraría esta información de manera indefinida hasta que una acción de usuario permita realizar la actualización de forma manual. 
        p.mb-0 Lo mismo pasa en un chat. Imagine que el chat de Facebook es sincrónico; no sería posible ver, en tiempo real, las respuestas de las personas con las cuales estamos trabajando, básicamente, se requeriría que actualizásemos el chat para poder ver si realmente ha llegado un nuevo mensaje. Este tipo de interacciones ha sido reemplazado por funcionalidades asincrónicas, que, posiblemente x cantidad de tiempo, permiten una actualización de la información.
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Codificación de petición tradicional HTTP, asíncrona
    p.mb-5(data-aos="fade-right") Las aplicaciones asíncronas, por su diseño, permiten notificar cambios al cliente cuando en el servidor han ocurrido cambios, de esta forma, permite que la actualización de información sea más eficiente y rápida. Para la implementación de un flujo asíncrono, es posible encontrar tres formas:
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 13]. Ejecución de flujo poll
    AcordionA.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-down")
      .row.justify-content-center(titulo="Comunicación asíncrona POLL")
        .col-lg-10
          p Consiste en que el cliente envía peticiones http al servidor en tiempos regulares, es decir, cada x cantidad de tiempo, para conocer el estado de los datos en el servidor y representar los cambios evidenciados. Un ejemplo de estos es el uso de la función setInterval y Ajax del lado de JavaScript.
          figure
            img(src='@/assets/curso/tema2/img21.svg', style="width: 1100px" ,alt='').m-auto
      .row.justify-content-center(titulo="Comunicación asíncrona LONG-POLL")
        .col-lg-10
          p Consiste en que el cliente envía una petición http al servidor, el cual, cuando tiene una actualización, genera una respuesta, e inmediatamente se vuelve a generar una nueva petición, es decir, que si se envía una petición, esta queda encolada, hasta que haya una respuesta de actualización; al recibir la respuesta, se repite el proceso. Es aún más óptima que el método POLL, dado que este envía una serie de peticiones con una frecuencia determinada, haya o no cambios, mientras que LONG-POLL solo lo hace si una petición ha sido resuelta, y espera que haya un nuevo cambio.
          figure
            img(src='@/assets/curso/tema2/img22.svg', style="width: 1100px" ,alt='').m-auto
      .row.justify-content-center(titulo="Comunicación asíncrona PUSH")
        .col-lg-10
          p consiste en que el cliente envía una petición al servidor http, el cual genera una respuesta que nunca termina, es decir, crea una conexión que no termina y queda abierta, de esta manera, permite enviar submensajes de actualización hacia el cliente. Mientras la conexión está abierta, el servidor se encarga de enviar mensajes de PING para evitar que el cliente realice un cierre de la conexión por timeout. Los sockets son un ejemplo de este tipo de conexiones.
          figure
            img(src='@/assets/curso/tema2/img23.svg', style="width: 1100px" ,alt='').m-auto
    p.ms-2.mb-5(data-aos="fade-right") #[b Nota]. Tomado de: 
      |
      a(href="https://hvalls.dev/posts/polling-long-polling-push" target="_blank") https://hvalls.dev/posts/polling-long-polling-push
    p.mb-0(data-aos="fade-right") El desarrollo de aplicaciones asíncronas permite una interacción más natural entre el usuario y el producto, permitiendo así una respuesta más eficiente.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-botones
      h2 2.5 Codificación de servidor socket con Node.js
    p.mb-5(data-aos="fade-right") Para la creación de un servidor socket, será necesario que cree un nuevo espacio de trabajo denominado websocketapp en la raíz de su workstation.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 14]. Creación de espacio de proyecto websocket
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img24.png', style="width: 350px" ,alt='').m-auto
          .col-lg-6(data-aos="fade-left")
            p.mb-0 Posteriormente crear el archivo de lógica de negocio, denominado index.js.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 15]. Creación de archivo de control index.js
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img25.png', style="width: 350px" ,alt='').m-auto
          .col-lg-6(data-aos="fade-left")
            p.mb-0 Codificar la lógica del servidor.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 16]. Código fuente de archivo de control index.js
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4(data-aos="fade-right")
            pre
              code.language-javascript
                |1  const app = require('express')();
                |2  const http = require('http').Server(app);
                |3  const io = require('socket.io')(http);
                |4  const port = process.env.PORT || 3000;
                |5
                |6  io.on('connection', (socket)) => {
                |7    socket.on('chat message', msg => {
                |8      io.emit('chat message', msg);
                |9    });
                |10 });
                |11
                |12 http.listen(port, () => {
                |14   console.log('Socket.IO server running at http://localhost:${port}/');
                |15 });
          .col-12(data-aos="fade-left")
            p.mb-0 Como se puede observar en la anterior imagen, en la línea 7, se hace uso del objeto io, el cual pertenece al módulo de socket.io, y permite establecer el servidor socket; en la línea 8, establece la conexión de este; y en la línea 9, emite el evento para que los suscritos al socket lo puedan recibir.
    Separador
    #t_2_6
    .titulo-segundo.color-acento-botones
      h2 2.6. Codificación de cliente socket con JavaScript
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema2/img24.svg', style="width: 80px" ,alt='').m-auto
      .col
        p Es requerido que, para hacer una conexión a un servidor socket, se cree un cliente socket; se requiere que esta implementación se desarrolle del lado del cliente, es decir, será necesario desarrollar una página html y, por medio de esta estructura, hacer uso de las facultades de JavaScript del lado del cliente.
        p.mb-0 Para ello, será necesario crear un archivo estático en la raíz del proyecto, con el contenido html, y transcribir el siguiente código fuente.
    .row.bg-c11
      .col-12
        .px-5
          .row.mb-3
            .col-12(data-aos="fade-right")
              pre
                code.language-html
                  | &lt;!DOCTYPE html&gt;
                  | &lt;html&gt;
                  |   &lt;head&gt;
                  |     &lt;title&gt;Socket.IO chat&lt;/title&gt;
                  |     &lt;style&gt;
                  |       body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
                  |       #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
                  |       #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
                  |       #input:focus { outline: none; }
                  |       #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }
                  |       #messages { list-style-type: none; margin: 0; padding: 0; }
                  |       #messages &gt; li { padding: 0.5rem 1rem; }
                  |       #messages &gt; li:nth-child(odd) { background: #efefef; }
                  |     &lt;/style&gt;
                  |   &lt;/head&gt;
                  |   &lt;body&gt;
                  |     &lt;ul id="messages"&gt;&lt;/ul&gt;
                  |       &lt;form id="form" action=""&gt;
                  |         &lt;input id="input" autocomplete="off" /&gt;&lt;button&gt;Send&lt;/button&gt;
                  |       &lt;/form&gt;
                  |      &lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
                  |
                  |      &lt;script&gt;
                  |       var socket = io();
                  |       var messages = document.getElementById('messages');
                  |       var form = document.getElementById('form');
                  |       var input = document.getElementById('input');
                  |
                  |       form.addEventListener('submit', function(e) {
                  |         e.preventDefault();
                  |         if (input.value) {
                  |           socket.emit('chat message', input.value);
                  |           input.value = '';
                  |         }
                  |       });
                  |
                  |       socket.on('chat message', function(msg) {
                  |         var item = document.createElement('li');
                  |         item.textContent = msg;
                  |         messages.appendChild(item);
                  |         window.scrollTo(0, document.body.scrollHeight);
                  |       });
                  |     &lt;/script&gt;
                  |   &lt;/body&gt;
                  | &lt;/html&gt;
          .row.mb-5(data-aos="fade-down")
            .col-auto.ms-2.px-3.py-2.bg-c5
              p.mb-0 Este archivo debe estar ubicado en la raíz del proyecto.
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
            p.mb-0 #[b Figura 17]. Creación de archivo estático index.html
          .row.mb-5(data-aos="fade-left")
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img26.png', style="width: 350px" ,alt='').m-auto
          p.mb-4(data-aos="fade-right") Se realiza un ajuste en el controlador del proyecto, para renderizar la vista estática. Modifique el index.js con el siguiente código:
          .row.mb-3
            .col-auto(data-aos="fade-left")
              pre
                code.language-javascript
                  | const app = require('express')();
                  | const http = require('http').Server(app);
                  | const io = require('socket.io')(http);
                  | const port = process.env.PORT || 3000;
                  | 
                  | app.get('/', (req, res) => {
                  |   res.sendFile(__dirname + '/index.html');
                  | });
                  | 
                  | io.on('connection', (socket) => {
                  |   socket.on('chat message', msg => {
                  |     io.emit('chat message', msg);
                  |   });
                  | });
                  | 
                  | http.listen(port, () => {
                  |   console.log(`Socket.IO server running at http://localhost:${port}/`);
                  | });
          .row.mb-5(data-aos="fade-right")
            .col-auto.ms-2.px-3.py-2.bg-c5
              p.mb-0 Este archivo debe estar ubicado en la raíz del proyecto.
          p.mb-4(data-aos="fade-right") App.js:
          .row.mb-5
            .col-auto(data-aos="fade-down")
              pre
                code.language-javascript
                  | {
                  |   "name": "Chat-SENA",
                  |   "description": "Chat SENA",
                  |   "success_url": "/",
                  |   "keywords": [
                  |     "node",
                  |     "express",
                  |     "socket.io",
                  |     "realtime",
                  |     "websocket"
                  |   ],
                  |   "scripts": {
                  |   },
                  |   "addons": [
                  |   ],
                  |   "env": {
                  |     "BUILDPACK_URL": "https://github.com/heroku/heroku-buildpack-nodejs"
                  |   }
                  | }
          p.mb-4(data-aos="fade-right") Package.json
          .row.mb-3
            .col-auto(data-aos="fade-left")
              pre
                code.language-javascript
                  | {
                  |   "name": "chat-sena",
                  |   "version": "0.0.1",
                  |   "description": "Primer aplicación con socket.io app",
                  |   "dependencies": {
                  |     "express": "^4.18.1",
                  |     "socket.io": "^4.1.2"
                  |   },
                  |   "scripts": {
                  |     "start": "node index.js"
                  |   }
                  | }
          .row.mb-5(data-aos="fade-down")
            .col-auto.ms-2.px-3.py-2.bg-c5
              p.mb-0 Ejecutar el comando > npm install
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 18]. Ejecución de npm install del proyecto para configurar dependencias
    .row.mb-5
      .col-12.bg-c3.p-4(data-aos="fade-right")
        .row
          .col-12
            figure
              img(src='@/assets/curso/tema2/img27.png', style="width: 750px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Después de ejecutar el anterior comando del proyecto, debe configurar los módulos definidos en el proyecto, viéndose de la siguiente manera:
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 19]. Validación de archivos de proyecto
    .row.mb-5
      .col-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img28.png', style="width: 350px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Luego, se requiere ejecutar la aplicación, para probar si el cliente y el servidor socket están funcionando adecuadamente, con lo cual se debe ejecutar el comando > node index o npm start.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 20.] Ejecución de proyecto
    .row.mb-5
      .col-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img29.png', style="width: 750px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Luego de que se ejecuta el proyecto, se puede proceder a probar la aplicación en el navegador.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 21]. Renderización en navegador de vista index
    .row
      .col-12.bg-c3.p-4
        .row
          .col-12(data-aos="fade-left")
            figure.mb-4
              img(src='@/assets/curso/tema2/img30.png', style="width: 750px" ,alt='').m-auto
            p.mb-0 En la raíz del servidor http://localhost:3000, se renderiza la plantilla estática, e internamente se conectará con el servidor socket del backend. Como se observa en el pantallazo, cada vez que se dé en el botón Send, se enviará un request al servidor con la data del mensaje; esta data será devuelta a los clientes que estén suscritos, es decir, al mismo cliente, y posteriormente, renderiza el mensaje en el contenido html.

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    window.Prism = window.Prism || {}
    window.Prism.manual = false
    Prism.highlightAll()
  },
  updated() {
    this.$aosRefresh()
    window.Prism = window.Prism || {}
    window.Prism.manual = false
    Prism.highlightAll()
  },
}
</script>

<style lang="sass"></style>
